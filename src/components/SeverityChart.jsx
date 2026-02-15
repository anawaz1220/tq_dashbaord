import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const SeverityChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="flex justify-center gap-4 mt-2">
        {payload.map((entry, index) => (
          <li key={`legend-${index}`} className="flex items-center gap-1 text-xs">
            <span
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-600">{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">Info</span>
        <h3 className="text-sm font-semibold text-gray-700">Severity Level</h3>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            label={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center -mt-32 mb-16">
        <div className="text-3xl font-bold text-gray-800">{total}</div>
        <div className="text-xs text-gray-500">Total Incidents</div>
      </div>
      <Legend content={renderLegend} />
      <div className="text-center mt-4">
        <div className="text-xs font-medium text-gray-500 mb-2">LEGEND</div>
        <div className="flex flex-col items-center gap-1">
          {data.map((entry, index) => (
            <div key={`label-${index}`} className="flex items-center gap-2 text-xs">
              <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: entry.color }} />
              <span className="text-gray-700 font-medium">{entry.name}</span>
              <span className="text-gray-500">({entry.value})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeverityChart;
