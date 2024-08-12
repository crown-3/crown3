import { useState } from "react";
import { EaseOutTransition } from "src/constants/animations";
import assets from "src/constants/assets";
import colors from "src/constants/colors";
import styled, { css } from "styled-components";

import Pixel from "../Pixel";
import ContestsFrameSet from "./frames/Contest";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  frame?: keyof typeof assets.ui.frames;
  hasHoverEffect?: boolean;
  children?: React.ReactNode;
}

const Box = ({ frame, hasHoverEffect, children, ...rest }: BoxProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => {
    if (!hasHoverEffect) return;
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    if (!hasHoverEffect) return;
    setIsHovering(false);
  };

  return (
    <StyledBox
      {...rest}
      $isHovering={isHovering}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {frame && frame === "contests" ? (
        <ContestsFrameSet isHovering={isHovering} />
      ) : (
        <></>
      )}
    </StyledBox>
  );
};

const StyledBox = styled.div<{ $isHovering?: boolean }>`
  background-color: ${colors.dark};
  border: 5px solid ${colors.border};
  margin: -5px;
  position: relative;

  ${EaseOutTransition};
  ${({ $isHovering }) =>
    $isHovering &&
    css`
      transform: scale(0.99);
      cursor: pointer;
    `}
`;

interface FramePixelProps {
  $left?: React.CSSProperties["left"];
  $right?: React.CSSProperties["right"];
  $top?: React.CSSProperties["top"];
  $bottom?: React.CSSProperties["bottom"];

  $offsetX?: React.CSSProperties["left"];
  $offsetY?: React.CSSProperties["top"];

  $isFlipped?: boolean;
  $isHovering?: boolean;
  $hoverTransitionX?: React.CSSProperties["left"];
  $hoverTransitionY?: React.CSSProperties["top"];
}

const FramePixel = styled(Pixel)<FramePixelProps>`
  position: absolute;

  left: ${(props) =>
    props.$left && `calc(${props.$left} + ${props.$offsetX ?? "0px"})`};
  right: ${(props) =>
    props.$right && `calc(${props.$right} + ${props.$offsetX ?? "0px"})`};
  top: ${(props) =>
    props.$top && `calc(${props.$top} + ${props.$offsetY ?? "0px"})`};
  bottom: ${(props) =>
    props.$bottom && `calc(${props.$bottom} + ${props.$offsetY ?? "0px"})`};

  ${EaseOutTransition};
  ${({ $isFlipped, $isHovering, $hoverTransitionX, $hoverTransitionY }) => css`
    transform: ${$isFlipped && `scaleX(-1)`}
      ${$isHovering &&
      `translate(
        ${$hoverTransitionX ?? "0px"},
        ${$hoverTransitionY ?? "0px"}
        )
      `};
  `}
`;

const LeftTopFrame = styled(FramePixel).attrs({
  $left: "0px",
  $top: "0px",
  $hoverTransitionX: "-10px",
  $hoverTransitionY: "-10px",
})``;

const MiddleTopFrame = styled(FramePixel).attrs({
  $left: "50%",
  $top: "0px",
  $hoverTransitionY: "-10px",
})`
  z-index: 1;
`;

const RightTopFrame = styled(FramePixel).attrs({
  $right: "0px",
  $top: "0px",
  $isFlipped: true,
  $hoverTransitionX: "-10px",
  $hoverTransitionY: "-10px",
})``;

const LeftMiddleFrame = styled(FramePixel).attrs({
  $left: "0px",
  $top: "50%",
  $hoverTransitionX: "-10px",
})``;

const RightMiddleFrame = styled(FramePixel).attrs({
  $right: "0px",
  $top: "50%",
  $isFlipped: true,
  $hoverTransitionX: "-10px",
})``;

const LeftBottomFrame = styled(FramePixel).attrs({
  $left: "0px",
  $bottom: "0px",
  $hoverTransitionX: "-10px",
  $hoverTransitionY: "10px",
})``;

const MiddleBottomFrame = styled(FramePixel).attrs({
  $left: "50%",
  $bottom: "0px",
  $hoverTransitionY: "10px",
})`
  z-index: 1;
`;

const RightBottomFrame = styled(FramePixel).attrs({
  $right: "0px",
  $bottom: "0px",
  $isFlipped: true,
  $hoverTransitionX: "-10px",
  $hoverTransitionY: "10px",
})``;

export default Box;
