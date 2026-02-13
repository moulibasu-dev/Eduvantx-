
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Lead Growth', target: 20, unit: '%' },
  { name: 'Conversion Rise', target: 15, unit: '%' },
  { name: 'CPL Reduction', target: -10, unit: '%' },
];

const colors = ['#3b82f6', '#22c55e', '#ef4444'];

const ObjectiveChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#4b5563" />
          <YAxis unit="%" stroke="#4b5563" />
          <Tooltip
            contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', color: '#1f2937' }}
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
          />
          <Legend wrapperStyle={{ color: '#1f2937' }} />
          <Bar dataKey="target" name="Target Improvement" fill="#3b82f6">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ObjectiveChart;