import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getStorageItem,
  setStorageItem
} from "../../../core/utils/localStorage";

type Task = {
  text: string;
  isCompleted: boolean;
  isImportant: boolean;
  id: string;
};

type TaskStateProps = {
  tasks: Task[];
  allTaskCompleted: boolean;
};

type PayloadSetTask = Task;

const initialState: TaskStateProps = {
  tasks: getStorageItem("task") || [],
  allTaskCompleted: false
};

const validateAllTasksIsCompleted = (tasks: Task[]): boolean => {
  return tasks.every((task) => task.isCompleted);
};

export const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    setNewTask(state, { payload }: PayloadAction<PayloadSetTask>) {
      state.tasks.push(payload);
      const taskLS = getStorageItem("task") || [];
      taskLS.push(payload);

      setStorageItem("task", taskLS);
    },
    updateStatusCompletedTask(
      state,
      { payload }: PayloadAction<{ id: string }>
    ) {
      const findTaskById = state.tasks.findIndex(
        (task) => task.id === payload.id
      );

      if (findTaskById !== -1) {
        const currentStatus = state.tasks[findTaskById].isCompleted;
        state.tasks[findTaskById].isCompleted = !currentStatus;
        setStorageItem("task", state.tasks);
        state.allTaskCompleted = validateAllTasksIsCompleted(state.tasks);
      }
    },
    updateStatusImportantTask(
      state,
      { payload }: PayloadAction<{ id: string }>
    ) {
      const findTaskById = state.tasks.findIndex(
        (task) => task.id === payload.id
      );

      if (findTaskById !== -1) {
        const currentStatus = state.tasks[findTaskById].isImportant;
        state.tasks[findTaskById].isImportant = !currentStatus;
        setStorageItem("task", state.tasks);
      }
    }
  }
});

export const {
  setNewTask,
  updateStatusCompletedTask,
  updateStatusImportantTask
} = taskSlice.actions;
