document.addEventListener("DOMContentLoaded", function() {
  d3.json("data/selected.json").then(function(data) {
    // Extract unique MainBranch values
    const mainBranches = [...new Set(data.map(d => d.MainBranch))];

    // Create a tab button for each main branch
    const tabsDiv = d3.select("#tabs");
    mainBranches.forEach((branch, i) => {
      tabsDiv.append("button")
        .text(branch)
        .attr("data-branch", branch)
        .on("click", function() {
          // On click, highlight this tab and show corresponding chart
          d3.selectAll("#tabs button").classed("active", false);
          d3.select(this).classed("active", true);

          // Show only the chart corresponding to this branch
          d3.selectAll(".chart-container").classed("active", false);
          d3.select(`#chart-${branch}`).classed("active", true);
        });
    });

    // Initially activate the first tab
    d3.select("#tabs button").classed("active", true);

    const plotDiv = d3.select("#plot");

    // For each main branch, filter data and create a chart container
    mainBranches.forEach((branch, i) => {
      const filteredData = data.filter(d => d.MainBranch === branch);

      // Create a container for the chart
      const chartContainer = plotDiv.append("div")
        .attr("class", "chart-container")
        .attr("id", `chart-${branch}`);

      // We will create a simple bar chart of AIAcc values
      // Assuming AIAcc is numeric. If it's a factor or categorical, 
      // you may need to adapt the visualization.

      // Set dimensions
      const margin = {top: 20, right: 20, bottom: 30, left: 40};
      const width = 500 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const svg = chartContainer.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // x-scale for AIAcc (let's just treat them as numeric and plot a histogram-like bar chart)
      const x = d3.scaleLinear()
        .domain(d3.extent(filteredData, d => d.AIAcc))
        .nice()
        .range([0, width]);

      // Let's create bins for a histogram
      const bins = d3.bin()
        .domain(x.domain())
        .thresholds(10)(filteredData.map(d => d.AIAcc));

      const y = d3.scaleLinear()
        .domain([0, d3.max(bins, d => d.length)])
        .nice()
        .range([height, 0]);

      // Append bars
      svg.selectAll("rect")
        .data(bins)
        .join("rect")
        .attr("x", d => x(d.x0))
        .attr("y", d => y(d.length))
        .attr("width", d => x(d.x1) - x(d.x0) - 1)
        .attr("height", d => height - y(d.length))
        .attr("fill", "steelblue");

      // Add x-axis
      svg.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      // Add y-axis
      svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y));

      // Add axis labels
      svg.append("text")
        .attr("x", width/2)
        .attr("y", height + margin.bottom - 5)
        .attr("text-anchor", "middle")
        .text("AIAcc");

      svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 15)
        .attr("x", -height/2)
        .attr("text-anchor", "middle")
        .text("Count");
    });

    // Activate the first chart by default
    d3.select(".chart-container").classed("active", true);
  });
});
