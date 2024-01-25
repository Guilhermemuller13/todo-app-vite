import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;

    ${media.lessThan("medium")`
      width: 90vw;
      padding: ${theme.spacings.xsmall} 0;
    `}
  `}
`;

export const Footer = styled.div`
  ${() => css`
    margin-top: 1rem;
  `}
`;
