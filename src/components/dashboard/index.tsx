import React from "react";
import TaskForm from "../task/TaskForm";
import DashboardRightBar from "./DashboardRightBar";
import DashboardLeftBar from "./DashboardLeftBar";

const DashbaordComponent = () => {
  return (
    <div className="flex">
      <DashboardLeftBar />
      <TaskForm />
      <DashboardRightBar />
    </div>
  );
};

export default DashbaordComponent;
