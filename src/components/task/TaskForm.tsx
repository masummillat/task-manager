"use client";
import { motion } from "framer-motion";
import React from "react";

const TaskForm = () => {
  return (
    <motion.form className="bg-slate-400 p-2">
      <input type="text" />
    </motion.form>
  );
};

export default TaskForm;
