import React from "react";
import TaskForm from "./task/NewTaskForm";
import DashboardRightBar from "./DashboardRightBar";
import DashboardLeftBar from "./DashboardLeftBar";
import TaskListComponent from "./TaskListComponent";

const DashbaordComponent = () => {
  return (
    <div className="grid grid-cols-[1fr_auto]">
      {/* <DashboardLeftBar /> */}

      <div className="mx-2">
        <TaskListComponent />
      </div>
      <DashboardRightBar />
    </div>
  );
};

export default DashbaordComponent;
