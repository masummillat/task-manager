import { useTaskStore } from "@/app/store/useTaskStore";
import { TaskType } from "@/types/tasksType";
import clsx from "clsx";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

interface ITask {
  task: TaskType;
}
const Task: React.FC<ITask> = ({ task }) => {
  const { updateTask, deleteTask, selectTask, setIsEdit } = useTaskStore();
  const handleDone = (e: React.FormEvent<HTMLInputElement>) => {
    const { checked } = e.target as HTMLInputElement;
    updateTask({ ...task, isDone: checked });
  };
  const handleDelete = (e: any) => {
    e.stopPropagation();
    deleteTask(task);
    selectTask(null);
  };

  const handleSelect = () => {
    selectTask(task);
  };
  const handleEdit = (e: any) => {
    e.stopPropagation();
    selectTask(task);
    setIsEdit(true);
  };
  return (
    <li
      onClick={handleSelect}
      className="my-2 bg-slate-400 px-2 py-3 rounded-md cursor-pointer shadow-md"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <input
            onChange={handleDone}
            defaultChecked={task.isDone}
            type="checkbox"
          />
          <div className={clsx(task.isDone && "line-through", "text-white")}>
            {task.name}
          </div>
        </div>
        <div className="flex gap-2">
          <AiFillEdit
            className="cursor-pointer hover:text-purple-600 text-white "
            onClick={handleEdit}
          />
          <BsTrash
            onClick={handleDelete}
            className="cursor-pointer hover:text-red-700 text-white "
          />
        </div>
      </div>
    </li>
  );
};

export default Task;
