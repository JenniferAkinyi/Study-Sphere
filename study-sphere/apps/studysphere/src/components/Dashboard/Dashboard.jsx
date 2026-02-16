import React from "react";
import WelcomeHeader from "./Components/WelcomeHeader";
import JoinedGroups from "./Components/JoinedGroups";
import RecentActivity from "./Components/RecentActivity";
import UpcomingSessions from "./Components/UpcomingSessions";
import QuickBoostCard from "./Components/QuickBoostCard";
import GoalCard from "./Components/GoalCard"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-10 h-200 lg:grid-cols-3">
      <div className="space-y-8 lg:col-span-2">
        <WelcomeHeader/>
        <JoinedGroups />
        <RecentActivity />
      </div>
      <div className="space-y-6">
        <GoalCard />
        <UpcomingSessions />
        <QuickBoostCard />
      </div>
    </div>
  );
};

export default Dashboard;
