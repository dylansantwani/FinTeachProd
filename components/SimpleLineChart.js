import React from 'react';

const SimpleLineChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const stocks = Object.keys(data[0]).filter(key => key !== 'month');
  const months = data.map(d => d.month);

  const maxValue = Math.max(...data.flatMap(d => stocks.map(stock => d[stock])));
  const minValue = Math.min(...data.flatMap(d => stocks.map(stock => d[stock])));

  const width = 600;
  const height = 400;
  const padding = 40;

  const xScale = (i) => (i / (months.length - 1)) * (width - 2 * padding) + padding;
  const yScale = (v) => height - ((v - minValue) / (maxValue - minValue)) * (height - 2 * padding) - padding;

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00'];

  return (
    <svg width={width} height={height}>
      {stocks.map((stock, stockIndex) => (
        <path
          key={stock}
          d={data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d[stock])}`).join(' ')}
          fill="none"
          stroke={colors[stockIndex % colors.length]}
          strokeWidth={2}
        />
      ))}
      {months.map((month, i) => (
        <text key={month} x={xScale(i)} y={height - 10} textAnchor="middle">{month}</text>
      ))}
      {stocks.map((stock, i) => (
        <text key={stock} x={10} y={20 + i * 20} fill={colors[i % colors.length]}>{stock}</text>
      ))}
    </svg>
  );
};

export default SimpleLineChart;