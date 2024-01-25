import { Container } from "../../components/Container";
import TaskContent from "../../features/TaskContent";

import * as S from "./styles";
import TaskFooter from "../../features/TaskFooter";
import TaskConfetti from "../../features/TaskConfetti";

//pagina principal do todo app
const Home = () => {
  return (
    <Container>
      <TaskConfetti />
      <S.Wrapper>
        <TaskContent />
        <TaskFooter />
      </S.Wrapper>
    </Container>
  );
};

export default Home;
