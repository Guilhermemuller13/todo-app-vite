import styled, { css } from "styled-components";
import { rgba } from "polished";

import { ItemProps } from ".";

type CheckedProps = Pick<ItemProps, "isChecked">;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const OptionsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  `}
`;

export const Text = styled.p<CheckedProps>`
  ${({ theme, isChecked }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    text-decoration: ${isChecked ? "line-through" : "none"};
  `}
`;

export const Wrapper = styled.div<CheckedProps>`
  ${({ theme, isChecked }) => css`
    display: flex;
    justify-content: space-between;
    background: ${isChecked
      ? rgba(theme.colors.secondary, 0.6)
      : theme.colors.secondary};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
  `}
`;
