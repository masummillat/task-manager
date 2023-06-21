"use client";
import React, { useEffect, useState } from "react";
import CustomDrawer from "../base/CustomDrawer";
import { useTaskStore } from "@/app/store/useTaskStore";
import TaskDetails from "./task/TaskDetails";

const DashboardRightBar = () => {
  const { selectedTask, selectTask } = useTaskStore();
  const [open, setOpen] = useState(false);

  const onSwitch = () => {
    setOpen((c) => !c);
    selectTask(null);
  };

  useEffect(() => {
    if (selectedTask) setOpen(true);
    else setOpen(false);
  }, [selectedTask]);
  return (
    <div className="relative" style={{ width: open ? "250px" : "auto" }}>
      <CustomDrawer open={open} handleOpen={onSwitch}>
        <TaskDetails />
      </CustomDrawer>
    </div>
  );
};

export default DashboardRightBar;
