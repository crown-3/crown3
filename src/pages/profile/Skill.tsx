import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "src/components/common/Box";
import PixelButton from "src/components/common/PixelButton";
import DragToScrollContainer from "src/components/containers/DragToScrollContainer";
import Spacer from "src/components/containers/Spacer";
import Tilemap from "src/components/tilemap/Tilemap";
import colors from "src/constants/colors";
import {
  MOBILE_BREAKPOINT,
  MOBILE_BREAKPOINT_PX,
} from "src/constants/defaults";
import Paths from "src/constants/paths";
import { Tree, TREES } from "src/constants/skilltrees";
import { SelectedTileRecord } from "src/types/tile";
import styled, { css } from "styled-components";

import SkillDescription from "./SkillDescription";

const Skill = () => {
  const [selectedTree, setSelectedTree] = useState<Tree>(TREES[0]);

  const [selectedTile, setSelectedTile] = useState<SelectedTileRecord>(null);

  const navigator = useNavigate();

  return (
    <>
      <h2>⚔️ skills</h2>

      <SkillViewerWrapper>
        <Spacer height="50px" />

        <SelectorWrapper>
          {TREES.map((tree) => (
            <SelectorBox key={tree.type} $isSelected={tree === selectedTree}>
              <SelectorButton
                onClick={() => {
                  setSelectedTree(tree);
                }}
              >
                {tree.type}
              </SelectorButton>
            </SelectorBox>
          ))}
        </SelectorWrapper>

        <SkillViewer>
          <DragToScrollContainer>
            <Tilemap
              tileSize="100px"
              rows={9}
              columns={12}
              tileInfos={selectedTree.tileInfos}
              selectedTileState={[selectedTile, setSelectedTile]}
            />
          </DragToScrollContainer>

          {selectedTile?.icon && (
            <SkillDescriptionWrapper>
              <SkillDescription
                tileInfo={selectedTile}
                onDismiss={() => {
                  setSelectedTile(null);
                }}
              />
            </SkillDescriptionWrapper>
          )}
        </SkillViewer>
      </SkillViewerWrapper>

      <MobileDirectionWrapper>
        <Spacer height="20px" />
        <PixelButton
          onClick={() => {
            navigator(Paths.SKILLS);
          }}
        >
          스킬 확인하기
        </PixelButton>
      </MobileDirectionWrapper>
    </>
  );
};

const SkillViewerWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectorBox = styled(Box)<{ $isSelected: boolean }>`
  border-bottom: 5px solid ${colors.dark};
  color: ${colors.grey};

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: ${colors.white};
      z-index: 1;
    `};
`;

const SelectorButton = styled.button`
  width: 200px;
  outline: none;
  border: none;
  background-color: transparent;

  padding: 10px 0px;

  color: inherit;
  text-align: center;
  font-family: "Galmuri9", sans-serif;
  font-size: 20px;

  cursor: pointer;
`;

const SkillViewer = styled(Box)`
  width: 100%;
  max-width: 900px;

  height: 600px;
  position: relative;
`;

const SkillDescriptionWrapper = styled(Box)`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 400px;
  height: calc(600px - 15px * 2);

  padding: 10px;
  box-sizing: border-box;
`;

const MobileDirectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${MOBILE_BREAKPOINT_PX + 1}px) {
    display: none;
  }
`;

export default Skill;
