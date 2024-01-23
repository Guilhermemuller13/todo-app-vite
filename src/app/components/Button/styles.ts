import styled, { css } from "styled-components";

export type WrapperProps = {};

const wrapperModifiers = {
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
};

export const Wrapper = styled.button`
  ${({ theme, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    height: 3rem;
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.secondary};
    }

    ${disabled && wrapperModifiers.disabled()};
  `}
`;
