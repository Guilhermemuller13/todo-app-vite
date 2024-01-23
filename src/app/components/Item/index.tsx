import { FC } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

import Button from "../Button";

import * as S from "./styles";

export type ItemProps = {
  text: string;
  isChecked: boolean;
  id: string;
  isImportant: boolean;
  onChangeStatusCompleted: (id: string) => void;
  onChangeLevelImportant: (id: string) => void;
};

const Item: FC<ItemProps> = ({
  text = "",
  isChecked = false,
  isImportant = false,
  onChangeStatusCompleted,
  onChangeLevelImportant,
  id
}) => {
  const onChangeStatusTask = () => {
    onChangeStatusCompleted(id);
  };

  const onChangeLevelTask = () => {
    onChangeLevelImportant(id);
  };

  return (
    <S.Wrapper isChecked={isChecked}>
      <S.TextWrapper>
        <S.Input
          type="checkbox"
          onChange={onChangeStatusTask}
          checked={isChecked}
        />
        <S.Text isChecked={isChecked}>{text}</S.Text>
      </S.TextWrapper>
      <S.OptionsWrapper>
        <Button
          onClick={onChangeLevelTask}
          icon={
            isImportant ? (
              <FaStar color="FFE500" />
            ) : (
              <FaRegStar color="FAFAFA" />
            )
          }
        ></Button>
      </S.OptionsWrapper>
    </S.Wrapper>
  );
};

export default Item;
