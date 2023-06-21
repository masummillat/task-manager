"use client";
import React, { useEffect, useState } from "react";
import NewTaskForm from "./task/NewTaskForm";
import TaskList from "./task/TaskList";
import { TaskType } from "@/types/tasksType";
import { useTaskStore } from "@/app/store/useTaskStore";

const TaskListComponent = () => {
  const { tasks } = useTaskStore();
  return (
    <div>
      <NewTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskListComponent;
