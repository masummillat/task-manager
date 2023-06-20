"use client";
import React, { useState } from "react";
import Drawer from "rc-drawer";
import "./drawer.scss";
import { Placement } from "rc-drawer/lib/Drawer";

interface ICustomDrawer {
  open: boolean;
  handleOpen: () => void;
  placement?: Placement;
}
const CustomDrawer: React.FC<ICustomDrawer> = ({
  open,
  handleOpen,
  placement = "right",
}) => {
  return (
    <Drawer width="250px" mask={false} open={open} placement={placement}>
      <div>
        <button onClick={handleOpen}>switch</button>
      </div>
      <div style={{ width: "200px", backgroundColor: "red" }}>content</div>
    </Drawer>
  );
};

export default CustomDrawer;
