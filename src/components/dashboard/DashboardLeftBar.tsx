"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import CustomDrawer from "../base/CustomDrawer";

const DashboardLeftBar = () => {
  const [open, setOpen] = useState(false);

  const onSwitch = () => {
    setOpen((c) => !c);
  };
  return (
    <div style={{ width: open ? "250px" : "auto" }}>
      <CustomDrawer placement="left" open={open} handleOpen={onSwitch}>
        <div>Coasjfdaoskdfjlk</div>
      </CustomDrawer>
      <AiOutlineMenu onClick={onSwitch} />
    </div>
  );
};

export default DashboardLeftBar;
