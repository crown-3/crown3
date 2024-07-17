import {
  CONTENT_AREA_DESKTOP,
  CONTENT_AREA_MOBILE,
  MOBILE_BREAKPOINT,
} from "src/constants/defaults";
import styled, { css } from "styled-components";

export interface ContentAreaProps {
  width?: React.CSSProperties["width"];
  $isCenter?: boolean;
}

const Content = styled.div<ContentAreaProps>`
  margin: 0 auto;
  width: ${({ width }) => (width ? width : CONTENT_AREA_DESKTOP)};
  max-width: ${({ width }) => width || "1300px"};

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: ${({ width }) => (width ? width : CONTENT_AREA_MOBILE)};
  }

  ${({ $isCenter }) =>
    $isCenter &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

export default Content;
