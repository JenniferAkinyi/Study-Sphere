import React from "react";
import {
  MdOutlineAccessTimeFilled,
  MdOutlineTrendingDown,
  MdOutlineTrendingFlat,
  MdOutlineTrendingUp,
} from "react-icons/md";
import { useUser } from "../../../context/userContext";

const StudyTimeCard = () => {
  const { userData } = useUser();
  let trend = "flat";
  if (userData?.previousWeeklyMinutes != null) {
    if (userData.weeklyStudyMinutes > userData.previousWeeklyMinutes) {
      trend = "up";
    } else if (userData.weeklyStudyMinutes < userData.previousWeeklyMinutes) {
      trend = "down";
    }
  }
  return (
    <div className="p-3 bg-white border border-gray-200 shadow-sm rounded-xl lg:w-64">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">Total weekly Study Hours</p>
        <MdOutlineAccessTimeFilled size={14} className="text-red-600" />
      </div>
      <h1 className="text-2xl font-extrabold">
        <span>{(userData?.weeklyStudyMinutes / 60) ?? 0} </span> Hours
      </h1>
      <div className="flex items-center gap-2 mt-2">
        {trend === "up" && (
          <>
            <MdOutlineTrendingUp className="text-green-500" />
            <span className="text-sm font-medium text-green-500">
              Hours Increase
            </span>
          </>
        )}
        {trend === "down" && (
          <>
            <MdOutlineTrendingDown className="text-red-500" />
            <span className="text-sm font-medium text-red-500">
              Hours Decrease
            </span>
          </>
        )}
        {trend === "flat" && (
          <>
            <MdOutlineTrendingFlat className="text-indigo-500" />
            <span className="text-sm font-medium text-indigo-500">
              No change
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default StudyTimeCard;
