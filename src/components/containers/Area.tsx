import styled from "styled-components";

export interface AreaProps {
  $backgroundColor?: React.CSSProperties["backgroundColor"];
  $zIndex?: React.CSSProperties["zIndex"];
}

const Area = styled.section<AreaProps>`
  z-index: ${({ $zIndex }) => $zIndex};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : undefined};
`;

export default Area;
