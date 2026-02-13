import React from "react";
import Topbar from "./Topbar";
import Sidebar from "../Sidebar/Sidebar";
import PostComposer from "../Posts/PostComposer";
import PostFeed from "../Posts/Postfeed/PostFeed";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background-light">
      <Topbar />
      <Sidebar />
      <main className="p-6">
        <PostComposer/>
        <PostFeed />
      </main>
    </div>
  );
};

export default Dashboard;
