import Confetti from "react-confetti";
import { useWindowSize } from "react-use/lib";

const TasksCompletedConfetti = () => {
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} />;
};

export default TasksCompletedConfetti;
