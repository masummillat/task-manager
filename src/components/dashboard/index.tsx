import React from "react";
import TaskForm from "../task/TaskForm";
import DashboardRightBar from "./DashboardRightBar";
import DashboardLeftBar from "./DashboardLeftBar";

const DashbaordComponent = () => {
  return (
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
      <DashboardLeftBar />
      <TaskForm />
      <DashboardRightBar />
    </div>
  );
};

export default DashbaordComponent;
