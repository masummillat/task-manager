"use client";
import React, { useState } from "react";
import Drawer from "rc-drawer";
import CustomDrawer from "../base/CustomDrawer";

const DashboardLeftBar = () => {
  const [open, setOpen] = useState(false);

  const onSwitch = () => {
    setOpen((c) => !c);
  };
  return (
    <div>
      <CustomDrawer placement="left" open={open} handleOpen={onSwitch} />
      <button onClick={onSwitch}>switch</button>
    </div>
  );
};

export default DashboardLeftBar;
