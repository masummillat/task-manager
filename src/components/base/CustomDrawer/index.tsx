"use client";
import React from "react";
import Drawer from "rc-drawer";
import "./drawer.scss";
import { Placement } from "rc-drawer/lib/Drawer";
import { GrClose } from "react-icons/gr";

interface ICustomDrawer {
  open: boolean;
  handleOpen: () => void;
  placement?: Placement;
  children: React.ReactNode;
}
const CustomDrawer: React.FC<ICustomDrawer> = ({
  open,
  handleOpen,
  placement = "right",
  children,
}) => {
  return (
    <Drawer
      className="bg-slate-400 "
      width="250px"
      mask={false}
      open={open}
      placement={placement}
    >
      <div className="w-full h-full p-2">
        <div>
          <GrClose
            className="text-white cursor-pointer hover:text-red-600"
            color="white"
            onClick={handleOpen}
          />
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
