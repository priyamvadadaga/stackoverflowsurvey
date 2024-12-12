// add your JavaScript/D3 to this file
// Load the CSV file

d3.csv("data/industry_summary.csv").then(function (data) {
  // Parse the data
  data.forEach(d => {
    d.Count = +d.Count; // Ensure Count is numeric
  });

  // Set dimensions and margins for the chart
  const width = 800;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 50, left: 50 };

  // Create an SVG container
  const svg = d3.select("#plot")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Define scales
  const x = d3.scaleBand()
    .domain(data.map(d => d.Industry))
    .range([0, width])
    .padding(0.2);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Count)])
    .nice()
    .range([height, 0]);

  // Add axes
  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");

  svg.append("g")
    .call(d3.axisLeft(y));

  // Add bars
  svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.Industry))
    .attr("y", d => y(d.Count))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.Count));

  // Add axis labels
  svg.append("text")
    .attr("class", "axis-label")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 10)
    .style("text-anchor", "middle")
    .text("Industry");

  svg.append("text")
    .attr("class", "axis-label")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .attr("transform", "rotate(-90)")
    .style("text-anchor", "middle")
    .text("Count");
});
