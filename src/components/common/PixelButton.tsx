import { useState } from "react";
import colors from "src/constants/colors";
import styled, { css } from "styled-components";

import Box from "./box/Box";

interface PixelButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const PixelButton = ({ onClick, children }: PixelButtonProps) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const onTouchStart = () => {
    setIsMouseDown(true);
  };

  const onTouchDismiss = () => {
    setIsMouseDown(false);
    onClick?.();
  };

  return (
    <ButtonWrapper
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchDismiss}
      onTouchCancel={onTouchDismiss}
      onMouseDown={onTouchStart}
      onMouseUp={onTouchDismiss}
    >
      <LowerLayerBox />

      <UpperLayerBox $isMouseDown={isMouseDown}>{children}</UpperLayerBox>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  height: 70px;
  width: 100%;
  border: none;

  position: relative;
`;

const UpperLayerBox = styled(Box)<{ $isMouseDown: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 50px;
  line-height: 50px;

  text-align: center;
  color: ${colors.white};

  ${({ $isMouseDown }) =>
    $isMouseDown &&
    css`
      top: unset;
      bottom: 0;
    `}
`;

const LowerLayerBox = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 50px;

  background-color: ${colors.darker};
`;

export default PixelButton;
