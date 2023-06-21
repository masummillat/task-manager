"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useTaskStore } from "@/app/store/useTaskStore";
import { TaskType } from "@/types/tasksType";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import clsx from "clsx";
import Input from "@/components/base/input";

const schema = yup
  .object({
    task: yup.string().required("Email is required."),
    description: yup.string().nullable().default(""),
    due_date: yup.date().required("Due date is required"),
  })
  .required();

type InputType = yup.InferType<typeof schema>;

const NewTaskForm = () => {
  const [value, onChange] = useState<any>(new Date());

  const {
    tasks,
    addTask,
    selectedTask,
    updateTask,
    selectTask,
    isEdit,
    setIsEdit,
  } = useTaskStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<InputType>({
    resolver: yupResolver(schema),
    defaultValues: {
      task: "",
      description: "",
      due_date: new Date(),
    },
    mode: "onSubmit",
  });

  const [showCalender, setShowCalender] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTask && isEdit) {
      setValue("task", selectedTask.name);
      setValue("description", selectedTask.description);
      if (selectedTask.due_date) {
        setValue("due_date", new Date(selectedTask.due_date));
      }
    } else {
      reset();
    }
  }, [isEdit, reset, selectedTask, setValue]);
  const onSubmit: SubmitHandler<InputType> = async (data: InputType) => {
    if (isEdit && selectedTask) {
      updateTask({
        ...selectedTask,
        name: data.task,
        description: data.description,
        due_date: data.due_date,
      });
      setIsEdit(false);
    } else {
      const newTask: TaskType = {
        name: data.task,
        description: data.description,
        id: uuidv4(),
        assignedTo: "myself",
        isDone: false,
        due_date: data.due_date,
      };
      addTask(newTask);
    }

    reset();
  };

  useEffect(() => {
    setValue("due_date", new Date(value));
  }, [setValue, value]);
  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-400 p-2  h-36 rounded-md my-2 shadow-lg"
    >
      <input
        placeholder="Add Task"
        className="w-full outline-none bg-transparent h-9 placeholder:text-white border-b-[1px] border-white mb-1"
        type="text"
        {...register("task")}
      />
      <input
        {...register("description")}
        placeholder="Description"
        className="w-full bg-transparent outline-none placeholder:text-white"
      />
      <div className="border-b-[1px] border-white my-1" />
      <div className="flex justify-between items-center ">
        <div className="relative">
          <div>
            <div className="text-white">Due date:</div>
            <Input
              label=""
              {...register("due_date")}
              type="text"
              onFocus={() => {
                setShowCalender(true);
                console.log("focused");
              }}
            />
          </div>
          <div className={clsx("absolute", showCalender ? "block" : "hidden")}>
            <Calendar
              onChange={(date) => {
                onChange(date);
                setShowCalender(false);
              }}
              value={value}
            />
          </div>
        </div>

        <button
          className=" shadow-md py-2 px-6 text-white bg-gray-800 rounded-md"
          type="submit"
        >
          {isEdit ? "Update" : "Add"}
        </button>
      </div>
    </motion.form>
  );
};

export default NewTaskForm;
