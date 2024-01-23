import { shallowEqual, useSelector } from "react-redux";

import Item from "../../components/Item";

import {
  getTasksImportants,
  getTasksRest
} from "../../modules/tasks/redux/taskSelector";
import {
  updateStatusCompletedTask,
  updateStatusImportantTask
} from "../../modules/tasks/redux/slice";
import { useAppDispatch } from "../../core/hooks/useRedux";

import * as S from "./styles";

//componente separado com a listagem das tasks
const TaskContent = () => {
  const tasksImportants = useSelector(getTasksImportants, shallowEqual);
  const tasksRest = useSelector(getTasksRest, shallowEqual);
  const dispatch = useAppDispatch();

  const onChangeLevelImportant = (id: string) => {
    dispatch(updateStatusImportantTask({ id }));
  };

  const onChangeStatusCompleted = (id: string) => {
    dispatch(updateStatusCompletedTask({ id }));
  };

  return (
    <S.Content>
      {tasksImportants.length > 0 && (
        <S.WrapperTasks>
          <S.Title>Favoritas</S.Title>
          {tasksImportants.map((task) => (
            <Item
              key={task.id}
              isChecked={task.isCompleted}
              isImportant={task.isImportant}
              text={task.text}
              onChangeLevelImportant={onChangeLevelImportant}
              onChangeStatusCompleted={onChangeStatusCompleted}
              id={task.id}
            />
          ))}
        </S.WrapperTasks>
      )}
      <S.WrapperTasks>
        <S.Title>Tarefas</S.Title>
        {tasksRest.map((task) => (
          <Item
            key={task.id}
            isChecked={task.isCompleted}
            isImportant={task.isImportant}
            text={task.text}
            onChangeLevelImportant={onChangeLevelImportant}
            onChangeStatusCompleted={onChangeStatusCompleted}
            id={task.id}
          />
        ))}
      </S.WrapperTasks>
    </S.Content>
  );
};

export default TaskContent;
