"use client";
import React, { useState } from "react";
import Drawer from "rc-drawer";
import motionProps from "./motion";
import CustomDrawer from "../base/CustomDrawer";

const DashboardRightBar = () => {
  const [open, setOpen] = useState(false);

  const onSwitch = () => {
    setOpen((c) => !c);
  };
  return (
    <div>
      <CustomDrawer open={open} handleOpen={onSwitch} />
      <button onClick={onSwitch}>switch</button>
    </div>
  );
};

export default DashboardRightBar;
