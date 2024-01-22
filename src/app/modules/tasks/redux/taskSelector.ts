import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/storeTypes";

const getTaskSlice = ({ task }: RootState) => task.tasks;

const getTasksImportants = createSelector([getTaskSlice], (tasks) =>
  tasks.filter((task) => task.isImportant)
);

const getTasksRest = createSelector([getTaskSlice], (tasks) =>
  tasks.filter((task) => !task.isImportant)
);

export { getTasksImportants, getTasksRest };
