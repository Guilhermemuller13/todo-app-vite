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
  ${({ theme }) => css`
    margin-top: 1rem;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 80vh;
    overflow-y: scroll;
  `}
`;

export const WrapperTasks = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`;
