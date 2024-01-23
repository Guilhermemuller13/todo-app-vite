import { shallowEqual, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Item from "../../components/Item";
import TaskForm from "../../components/TaskForm";

import {
  getTasksImportants,
  getTasksRest
} from "../../modules/tasks/redux/taskSelector";
import {
  setNewTask,
  updateStatusCompletedTask,
  updateStatusImportantTask
} from "../../modules/tasks/redux/slice";
import { useAppDispatch } from "../../core/hooks/useRedux";

import * as S from "./styles";
import { Container } from "../../components/Container";

const Home = () => {
  const tasksImportants = useSelector(getTasksImportants, shallowEqual);
  const tasksRest = useSelector(getTasksRest, shallowEqual);
  const dispatch = useAppDispatch();

  const onChangeLevelImportant = (id: string) => {
    dispatch(updateStatusImportantTask({ id }));
  };

  const onChangeStatusCompleted = (id: string) => {
    dispatch(updateStatusCompletedTask({ id }));
  };

  const onSubmitFormTask = (text: string) => {
    dispatch(
      setNewTask({
        text: text,
        id: uuidv4(),
        isCompleted: false,
        isImportant: false
      })
    );
  };

  return (
    <Container>
      <S.Wrapper>
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
        <S.Footer>
          <TaskForm onSubmitFormTask={onSubmitFormTask} />
        </S.Footer>
      </S.Wrapper>
    </Container>
  );
};

export default Home;
