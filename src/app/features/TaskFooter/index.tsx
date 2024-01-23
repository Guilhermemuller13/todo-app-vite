import { v4 as uuidv4 } from "uuid";

import { useAppDispatch } from "../../core/hooks/useRedux";
import { setNewTask } from "../../modules/tasks/redux/slice";

import TaskForm from "../../components/TaskForm";

import * as S from "./styles";

//componente separado com a inserção de nova task
const TaskFooter = () => {
  const dispatch = useAppDispatch();

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
    <S.Footer>
      <TaskForm onSubmitFormTask={onSubmitFormTask} />
    </S.Footer>
  );
};

export default TaskFooter;
