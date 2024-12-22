import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '01.01', value: 12000 },
  { date: '02.01', value: 12500 },
  { date: '03.01', value: 12300 },
  { date: '04.01', value: 13000 },
  { date: '05.01', value: 12800 },
  { date: '06.01', value: 13500 },
  { date: '07.01', value: 13800 },
  { date: '08.01', value: 14200 },
  { date: '09.01', value: 14100 },
  { date: '10.01', value: 14500 },
  { date: '11.01', value: 14800 },
  { date: '12.01', value: 15234 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12 }} 
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `€${value.toLocaleString()}`}
        />
        <Tooltip 
          formatter={(value: number) => [`€${value.toLocaleString()}`, 'Wert']}
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            padding: '8px',
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2563eb"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
} 