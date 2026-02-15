import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const ThreatsListChart = ({ data }) => {
  const barColor = '#8B7355';

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-700">Threats by Incoming Number</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Show:</span>
          <span className="text-xs font-semibold text-gray-700">Top 15</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 90, bottom: 5 }}
        >
          <XAxis type="number" domain={[0, 24]} tick={{ fontSize: 10 }} />
          <YAxis
            type="category"
            dataKey="phoneNumber"
            tick={{ fontSize: 9 }}
            width={85}
          />
          <Bar dataKey="threats" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-2 text-center">
        <span className="text-xs text-gray-500">↑ Total Threat Count</span>
      </div>
    </div>
  );
};

export default ThreatsListChart;
