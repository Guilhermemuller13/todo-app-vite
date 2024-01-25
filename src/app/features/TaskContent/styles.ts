import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 80vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0;
    }

    ${media.lessThan("medium")`
    max-height: 90vh;
    `}
  `}
`;

export const WrapperTasks = styled.div`
  ${() => css`
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
