import { ActiveAnimation } from "src/constants/animations";
import styled from "styled-components";

const PureButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${ActiveAnimation}
`;

export default PureButton;
