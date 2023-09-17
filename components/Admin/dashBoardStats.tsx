import React from "react";
import LineChartCommon from "./LineChartCommon";

const DashBoardStats = ({ title, value }) => {
  return (
    <div className="bg-offWhite w-full max-lg:mb-4 h-fit py-3 rounded-2xl overflow-hidden">
      <p className="text-3xl font-semibold text-center">{value}</p>
      <p className="text-[14px] font-semibold mt-3 text-center">{title}</p>
      {/* <LineChartCommon color="#8FCAB5" dataKey="amt" /> */}
    </div>
  );
};

export default DashBoardStats;
