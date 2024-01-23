import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/storeTypes";

//aqui temos alguns selectores da dados da store, ajudando a separ a logica e poluicao de codigo do component
const getTaskSlice = ({ task }: RootState) => task.tasks;

const getTasksImportants = createSelector([getTaskSlice], (tasks) =>
  tasks.filter((task) => task.isImportant)
);

const getTasksRest = createSelector([getTaskSlice], (tasks) =>
  tasks.filter((task) => !task.isImportant)
);

export { getTasksImportants, getTasksRest };
