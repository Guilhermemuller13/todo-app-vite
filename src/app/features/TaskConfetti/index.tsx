import { useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "../../core/hooks/useRedux";

import TasksCompletedConfetti from "../../components/TasksCompletedConfetti";

//efeito de confeti após marcar todas as tarefas como feitas..
const TaskConfetti = () => {
  const allTaskCompleted = useAppSelector(
    ({ task }) => task.allTaskCompleted,
    shallowEqual
  );
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    if (allTaskCompleted) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [allTaskCompleted]);

  if (showConfetti) return <TasksCompletedConfetti />;

  return null;
};

export default TaskConfetti;
