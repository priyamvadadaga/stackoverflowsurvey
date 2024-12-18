document.addEventListener("DOMContentLoaded", function() {
  d3.json("https://raw.githubusercontent.com/priyamvadadaga/stackoverflowsurvey/refs/heads/main/data/selected.json").then(function(data) {
    // Replace any null or NA values in SOComm with the string "NA"
    data.forEach((d) => {
      if (d.SOComm == null || d.SOComm === "NA") {
        d.SOComm = "NA";
      }
    });

    // Define a consistent order for SOComm levels
    const aiAccOrder = ['No, not at all', 'No, not really', 'Neutral', 'Yes, somewhat', 'Yes, definitely', 'Not sure'];
    
    const filteredData = data.filter((d) => d.DevType && d.DevType !== "NA");

    // Extract unique MainBranch categories
    const mainBranches = [...new Set(filteredData.map((d) => d.DevType))].sort();

    // Compute the global maximum count across all MainBranch categories
    const globalMaxCount = d3.max(
      mainBranches.map((branch) => {
        const filteredData = data.filter((d) => d.DevType === branch);
        const aiAccCounts = d3.rollup(filteredData, (v) => v.length, (d) => d.SOComm);
        return d3.max(aiAccOrder.map((label) => aiAccCounts.get(label) || 0));
      })
    );

    // Create tab buttons
    const tabsDiv = d3.select("#tabs");
    mainBranches.forEach((branch, i) => {
      tabsDiv
        .append("button")
        .text(branch)
        .attr("data-branch", branch)
        .on("click", function () {
          // Highlight the active tab
          d3.selectAll("#tabs button").classed("active", false);
          d3.select(this).classed("active", true);

          // Hide all chart containers and show the selected one
          d3.selectAll(".chart-container").classed("active", false);
          d3.select(`#chart-${branch.replace(/\W+/g, "_")}`).classed("active", true);
        });
    });

    // Activate the first tab by default
    d3.select("#tabs button").classed("active", true);

    const plotDiv = d3.select("#plot");

    // Dimensions for the chart
    const margin = { top: 20, right: 20, bottom: 60, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Tooltip setup
    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    // For each MainBranch, filter data and create a chart container
    mainBranches.forEach((branch) => {
      const filteredData = data.filter((d) => d.DevType === branch);

      // Count occurrences of each SOComm level
      const aiAccCounts = d3.rollup(
        filteredData,
        (v) => v.length,
        (d) => d.SOComm
      );

      // Ensure all SOComm levels are included in the counts, even if zero
      const aiAccArray = aiAccOrder.map((label) => ({
        SOComm: label,
        count: aiAccCounts.get(label) || 0,
      }));
      
      const dynamicMaxCount = d3.max(aiAccArray, (d) => d.count);

      // Create a container for the chart
      const chartId = `chart-${branch.replace(/\W+/g, "_")}`;
      const chartContainer = plotDiv
        .append("div")
        .attr("class", "chart-container")
        .attr("id", chartId);

      const svg = chartContainer
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // x-scale with consistent SOComm order
      const x = d3
        .scaleBand()
        .domain(aiAccOrder)
        .range([0, width])
        .padding(0.1);

      // y-scale with global maximum count
      const y = d3
          .scaleLinear()
          .domain([0, dynamicMaxCount])
          .nice()
          .range([height, 0]);

      // Draw bars
      svg
        .selectAll("rect")
        .data(aiAccArray)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.SOComm))
        .attr("y", (d) => y(d.count))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height - y(d.count))
        .on("mouseover", function (event, d) {
          tooltip.transition().duration(200).style("opacity", 1);
          tooltip.html(`Part of Community: ${d.SOComm}<br>Count: ${d.count}`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 20) + "px");
        })
        .on("mouseout", function () {
          tooltip.transition().duration(200).style("opacity", 0);
        });

      // Add x-axis
      svg
        .append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "middle")
        .attr("dy", "1em") // Adjust vertical alignment
        .each(function (d) {
          // Split the text into multiple lines if necessary
          const words = d.split(/\s+/); // Split by spaces
          const text = d3.select(this);
          text.text(null); // Clear existing text
          words.forEach((word, i) => {
            text
              .append("tspan")
              .text(word)
              .attr("x", 0)
              .attr("dy", i === 0 ? "0em" : "1em"); // First line starts at 0em, subsequent lines shift down
          });
        });

      // Add y-axis
      svg.append("g").attr("class", "axis").call(d3.axisLeft(y));

      // Add x-axis label
      svg
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 15)
        .attr("text-anchor", "middle")
        .text("Do you consider yourself a member of the Stack Overflow community?");

      // Add y-axis label
      svg
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 15)
        .attr("x", -height / 2)
        .attr("text-anchor", "middle")
        .text("Count");
    });

    // Initially show only the first chart
    d3.selectAll(".chart-container").classed("active", false);
    d3.select(".chart-container").classed("active", true);
  });
});
