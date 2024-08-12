import { css } from "styled-components";

export const ActiveAnimation = css`
  &:active {
    transform: scale(0.9);
  }

  transition: 0.1s ease-out;
`;

export const EaseOutTransition = css`
  transition: 0.2s cubic-bezier(0, 0.69, 0.36, 1);
`;
