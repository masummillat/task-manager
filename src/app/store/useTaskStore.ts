import { TaskType } from '@/types/tasksType'
import { create } from 'zustand'

type TaskStore = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  updateTask: (task: TaskType) => void;
  deleteTask: (task: TaskType) => void;
  selectTask: (task: TaskType | null) => void;
  selectedTask: TaskType | null,
  isEdit: boolean;
  setIsEdit: (value: boolean) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: JSON.parse(localStorage.getItem('tasks') || "[]"),
  addTask: (task: TaskType) => set((state)=>{
    localStorage.setItem("tasks", JSON.stringify([task, ...state.tasks]));
    return({tasks: [ task,...state.tasks]})
  }),
  updateTask: (task: TaskType) => set(state=> {
    const ind = state.tasks.findIndex((t)=>t.id === task.id);
    if(ind > -1){
      state.tasks[ind] = task;
    }
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    return ({tasks: state.tasks});
  }),
  deleteTask: (task: TaskType) => set((state)=>{
    const ind = state.tasks.findIndex((t)=>t.id === task.id);
    if(ind > -1){
       state.tasks.splice(ind,1)
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }
    return({tasks: state.tasks})
  }),
  selectedTask: null,
  selectTask: (task: TaskType | null) => set(({selectedTask: task})),
  isEdit: false,
  setIsEdit: (value: boolean)=>set({isEdit: value})
}))