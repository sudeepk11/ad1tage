import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 3000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4000,
    amt: 2181,
  },
];

const LineChartCommon = (props: any) => {
  return (
    <ResponsiveContainer width="100%" height={140}>
      <AreaChart
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
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" />
      <YAxis /> */}
        <Tooltip />
        <Area
          type="monotone"
          dataKey={props.dataKey}
          stroke={props.color}
          fill={props.color}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineChartCommon;

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const LineChartCommon = () => {
//     return (

//       );
// }

// export default LineChartCommon
