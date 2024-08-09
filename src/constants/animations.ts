import { css } from "styled-components";

export const ActiveAnimation = css`
  &:active {
    transform: scale(0.9);
  }

  transition: 0.1s ease-out;
`;
