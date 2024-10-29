import React from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import User from "../components/User";

const Dashboard = () => {
  return (
    <div>
      <AppBar />
      <div className="mt-8 ml-2 p-4">
        <Balance/>
        <User/>
      </div>
    </div>
  );
};

export default Dashboard;
