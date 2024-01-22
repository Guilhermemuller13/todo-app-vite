import { FC } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
// import { IoMdMore } from "react-icons/io";

import Button from "../Button";

import * as S from "./styles";

export type ItemProps = {
  text: string;
  checked: boolean;
  id: string;
  onChangeStatus: (id: string) => void;
  onChangeLevel: (id: string) => void;
};

const Item: FC<ItemProps> = ({
  text = "",
  checked = false,
  onChangeStatus,
  onChangeLevel,
  id
}) => {
  const onChangeStatusTask = () => {
    onChangeStatus(id);
  };

  const onChangeLevelTask = () => {
    onChangeLevel(id);
  };

  return (
    <S.Wrapper checked={checked}>
      <S.TextWrapper>
        <S.Input
          type="checkbox"
          onChange={onChangeStatusTask}
          checked={checked}
        />
        <S.Text checked={checked}>{text}</S.Text>
      </S.TextWrapper>
      <S.OptionsWrapper>
        <Button
          onClick={onChangeLevelTask}
          icon={
            checked ? <FaStar color="FFE500" /> : <FaRegStar color="FAFAFA" />
          }
        ></Button>
        {/* <Button onClick={} icon={<IoMdMore />}></Button> */}
      </S.OptionsWrapper>
    </S.Wrapper>
  );
};

export default Item;
