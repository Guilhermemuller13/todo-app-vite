import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  text: string;
  isCompleted: boolean;
  isImportant: boolean;
  id: string;
};

type TaskStateProps = {
  tasks: Task[];
};

type PayloadSetTask = Task;

const initialState: TaskStateProps = {
  tasks: [
    {
      id: "1",
      isCompleted: false,
      isImportant: false,
      text: "title da task"
    },
    {
      id: "2",
      isCompleted: false,
      isImportant: true,
      text: "title da task"
    },
    {
      id: "3",
      isCompleted: true,
      isImportant: true,
      text: "title da task"
    }
  ]
};

export const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    setNewTask(state, { payload }: PayloadAction<PayloadSetTask>) {
      state.tasks.push(payload);
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
      }
    }
  }
});

export const {
  setNewTask,
  updateStatusCompletedTask,
  updateStatusImportantTask
} = taskSlice.actions;
