import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Seaside",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mariott",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "JW",
    uv: 2000,
    pv: 3000,
    amt: 2290,
  },
  {
    name: "Hyatt",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Mariott",
    uv: 1890,
    pv: 4000,
    amt: 2181,
  },
];

const BarChartCommon = (props) => {
  return (
    <ResponsiveContainer width="100%" height={140}>
      <BarChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey={props.dataKey}
          fill={props.color}
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartCommon;
