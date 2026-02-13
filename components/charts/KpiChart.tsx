
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Target', CAC: 6000, LTV: 30000 },
  { name: 'Projected', CAC: 5000, LTV: 50000 },
];

const KpiChart: React.FC = () => {
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
          <YAxis stroke="#4b5563" tickFormatter={(value) => `₹${value / 1000}k`} />
          <Tooltip
            contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', color: '#1f2937' }}
            formatter={(value: number) => `₹${value.toLocaleString()}`}
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
          />
          <Legend wrapperStyle={{ color: '#1f2937' }} />
          <Bar dataKey="CAC" fill="#ef4444" name="Customer Acquisition Cost (CAC)" />
          <Bar dataKey="LTV" fill="#22c55e" name="Lifetime Value (LTV)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KpiChart;