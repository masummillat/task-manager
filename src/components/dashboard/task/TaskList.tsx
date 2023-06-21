import React from "react";
import Task from "./Task";
import { TaskType } from "@/types/tasksType";

interface ITaskList {
  tasks: TaskType[];
}
const TaskList: React.FC<ITaskList> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task: TaskType, index) => (
        <Task key={index} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
