import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const ThreatInfoPanel = ({ data, filter, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-700">Threat Info</h3>
        <select
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>All</option>
          <option>Critical Risk</option>
          <option>Significant Risk</option>
          <option>Suspicious</option>
        </select>
      </div>

      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-600 rotate-0">
                {item.name}
              </span>
            </div>
            <ResponsiveContainer width="100%" height={60}>
              <BarChart data={[item]} layout="vertical" margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <XAxis type="number" domain={[0, 35]} hide />
                <YAxis type="category" dataKey="name" hide />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  <Cell fill={item.color} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <span className="text-xs text-gray-500">↑ Total Threat Count</span>
      </div>
    </div>
  );
};

export default ThreatInfoPanel;
