import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
  `}
`;

export const Footer = styled.div`
  ${() => css`
    margin-top: 1rem;
  `}
`;
