import assets from "src/constants/assets";

import FrameSet from "../FrameStyledComponents";

export interface FrameSetProps {
  isHovering?: boolean;
}

const ContestsFrameSet = ({ isHovering }: FrameSetProps) => {
  return (
    <>
      <FrameSet.LeftTopFrame
        src={assets.ui.frames.contests.leftTop}
        width="195px"
        height="27px"
        $offsetX="-20px"
        $offsetY="-25px"
        $isHovering={isHovering}
      />
      <FrameSet.MiddleTopFrame
        src={assets.ui.frames.contests.middleTop}
        width="84px"
        height="33px"
        $offsetX="-42px"
        $offsetY="-20px"
        $isHovering={isHovering}
      />
      <FrameSet.RightTopFrame
        src={assets.ui.frames.contests.leftTop}
        width="195px"
        height="27px"
        $offsetX="-20px"
        $offsetY="-25px"
        $isHovering={isHovering}
      />
      <FrameSet.LeftMiddleFrame
        src={assets.ui.frames.contests.leftMiddle}
        width="15px"
        height="99px"
        $offsetX="-10px"
        $offsetY="-49.5px"
        $isHovering={isHovering}
      />
      <FrameSet.RightMiddleFrame
        src={assets.ui.frames.contests.leftMiddle}
        width="15px"
        height="99px"
        $offsetX="-10px"
        $offsetY="-49.5px"
        $isHovering={isHovering}
      />
      <FrameSet.LeftBottomFrame
        src={assets.ui.frames.contests.leftBottom}
        width="195px"
        height="27px"
        $offsetX="-20px"
        $offsetY="-23px"
        $isHovering={isHovering}
      />
      <FrameSet.MiddleBottomFrame
        src={assets.ui.frames.contests.middleBottom}
        width="60px"
        height="21px"
        $offsetX="-30px"
        $offsetY="-15px"
        $isHovering={isHovering}
      />
      <FrameSet.RightBottomFrame
        src={assets.ui.frames.contests.leftBottom}
        width="195px"
        height="27px"
        $offsetX="-20px"
        $offsetY="-23px"
        $isHovering={isHovering}
      />
    </>
  );
};

export default ContestsFrameSet;
