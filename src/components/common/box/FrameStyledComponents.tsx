import { EaseOutTransition } from "src/constants/animations";
import styled, { css } from "styled-components";

import Pixel from "../Pixel";

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

const FrameSet = {
  LeftTopFrame: styled(FramePixel).attrs({
    $left: "0px",
    $top: "0px",
    $hoverTransitionX: "-10px",
    $hoverTransitionY: "-10px",
  })``,

  MiddleTopFrame: styled(FramePixel).attrs({
    $left: "50%",
    $top: "0px",
    $hoverTransitionY: "-10px",
  })`
    z-index: 1;
  `,

  RightTopFrame: styled(FramePixel).attrs({
    $right: "0px",
    $top: "0px",
    $isFlipped: true,
    $hoverTransitionX: "-10px",
    $hoverTransitionY: "-10px",
  })``,

  LeftMiddleFrame: styled(FramePixel).attrs({
    $left: "0px",
    $top: "50%",
    $hoverTransitionX: "-10px",
  })``,

  RightMiddleFrame: styled(FramePixel).attrs({
    $right: "0px",
    $top: "50%",
    $isFlipped: true,
    $hoverTransitionX: "-10px",
  })``,

  LeftBottomFrame: styled(FramePixel).attrs({
    $left: "0px",
    $bottom: "0px",
    $hoverTransitionX: "-10px",
    $hoverTransitionY: "10px",
  })``,

  MiddleBottomFrame: styled(FramePixel).attrs({
    $left: "50%",
    $bottom: "0px",
    $hoverTransitionY: "10px",
  })`
    z-index: 1;
  `,

  RightBottomFrame: styled(FramePixel).attrs({
    $right: "0px",
    $bottom: "0px",
    $isFlipped: true,
    $hoverTransitionX: "-10px",
    $hoverTransitionY: "10px",
  })``,
};

export default FrameSet;
