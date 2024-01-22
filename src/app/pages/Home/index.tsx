import Item from "../../components/Item";
import TextField from "../../components/TextField";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.WrapperTasks>
          <S.Title>Importante</S.Title>
          <Item
            checked={true}
            text="dadas"
            onChangeLevel={() => {}}
            onChangeStatus={() => {}}
            id="123"
          />
          <Item
            checked={true}
            text="dadas"
            onChangeLevel={() => {}}
            onChangeStatus={() => {}}
            id="123"
          />
        </S.WrapperTasks>
        <S.WrapperTasks>
          <S.Title>Tarefas</S.Title>
          <Item
            checked={false}
            text="dadas"
            onChangeLevel={() => {}}
            onChangeStatus={() => {}}
            id="123"
          />
        </S.WrapperTasks>
      </S.Content>
      <S.Footer>
        <TextField />
      </S.Footer>
    </S.Wrapper>
  );
};

export default Home;
