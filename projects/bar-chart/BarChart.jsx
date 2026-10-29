
import * as d3 from "d3";

const width = 500;
const height = 400;

export const Barplot = ({ data }) => {
  // 1. Chart margins
  const margin = {
    top: 10,
    right: 35,
    bottom: 30,
    left: 130,
  };

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // 2. D3 math: Y scale for countries
  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.country))
    .range([0, innerHeight])
    .padding(0.2);

  // 3. D3 math: X scale for students
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.students) || 1])
    .range([0, innerWidth]);

  // 4. Visual properties
  const barHeight = yScale.bandwidth();
  const barColor = "#2563EB";

  // 5. React renders the SVG
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {data.map((d) => (
          <g key={d.country}>
            {/* Country label */}
            <text
              x={-10}
              y={yScale(d.country) + barHeight / 2}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize={11}
            >
              {d.country}
            </text>

            {/* Bar */}
            <rect
              x={0}
              y={yScale(d.country)}
              width={xScale(d.students)}
              height={barHeight}
              fill={barColor}
            />

            {/* Student count */}
            <text
              x={xScale(d.students) + 5}
              y={yScale(d.country) + barHeight / 2}
              dominantBaseline="middle"
              fontSize={11}
            >
              {d.students}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};
