import { Container } from "../../components/Container";
import TaskContent from "../../features/TaskContent";

import * as S from "./styles";
import TaskFooter from "../../features/TaskFooter";

//pagina principal do todo app
const Home = () => {
  return (
    <Container>
      <S.Wrapper>
        <TaskContent />
        <TaskFooter />
      </S.Wrapper>
    </Container>
  );
};

export default Home;
