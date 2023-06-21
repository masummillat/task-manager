import { useTaskStore } from "@/app/store/useTaskStore";
import clsx from "clsx";
import React from "react";
import { format } from "date-fns";

const TaskDetails = () => {
  const { selectedTask } = useTaskStore();
  return (
    <div className="prose prose-xl text-white">
      <div className="rounded-md shadow-sm bg-slate-500 p-2">
        <h4
          className={clsx(
            selectedTask?.isDone && "line-through",
            "m-0 text-white"
          )}
        >
          {selectedTask?.name}
        </h4>
        <div>
          <h5 className="m-0">Desc:</h5>
          <p className="m-0">{selectedTask?.description}</p>
        </div>
        <div>
          <h5>Assigned To:</h5>
          <p className="m-0">{selectedTask?.assignedTo}</p>
        </div>
        <div>
          Due Date:{" "}
          {selectedTask?.due_date &&
            format(new Date(selectedTask.due_date), "yyyy-MM-dd")}
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
