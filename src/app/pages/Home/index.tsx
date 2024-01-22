import Item from "../../components/Item";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Wrapper>
      <Item
        checked={true}
        text="dadas"
        onChangeLevel={() => {}}
        onChangeStatus={() => {}}
        id="123"
      />
      <Item
        checked={false}
        text="dadas"
        onChangeLevel={() => {}}
        onChangeStatus={() => {}}
        id="123"
      />
    </S.Wrapper>
  );
};

export default Home;
