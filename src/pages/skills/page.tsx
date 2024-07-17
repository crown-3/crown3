import "react-spring-bottom-sheet/dist/style.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomSheet } from "react-spring-bottom-sheet";
import DragToScrollContainer from "src/components/containers/DragToScrollContainer";
import Tilemap from "src/components/tilemap/Tilemap";
import colors from "src/constants/colors";
import Paths from "src/constants/paths";
import { Tree, TREES } from "src/constants/skilltrees";
import { SelectedTileRecord } from "src/types/tile";
import styled from "styled-components";

import SkillDescription from "../profile/SkillDescription";

const MobileSkills = () => {
  const [selectedTree, setSelectedTree] = useState<Tree>(TREES[0]);

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const [selectedTile, setSelectedTile] = useState<SelectedTileRecord>(null);

  const navigator = useNavigate();

  return (
    <>
      <ViewWrapper>
        <GoBack
          onClick={() => {
            navigator(Paths.PROFILE);
          }}
        >
          Go Back
        </GoBack>

        <Navbar>Skills</Navbar>

        <main style={{ width: "100%", height: "calc(100vh - 53px)" }}>
          <DragToScrollContainer>
            <Tilemap
              tileSize="100px"
              rows={9}
              columns={6}
              tileInfos={selectedTree.tileInfos}
              selectedTileState={[selectedTile, setSelectedTile]}
              onTileClick={() => {
                setIsBottomSheetOpen(true);
              }}
            />
          </DragToScrollContainer>
        </main>
      </ViewWrapper>

      <BottomSheet
        open={isBottomSheetOpen}
        onDismiss={() => {
          setIsBottomSheetOpen(false);
        }}
      >
        <div
          style={{ width: "100%", padding: "16px", boxSizing: "border-box" }}
        >
          {selectedTile && <SkillDescription tileInfo={selectedTile} />}
        </div>
      </BottomSheet>
    </>
  );
};

const ViewWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: ${colors.dark};
`;

const Navbar = styled.nav`
  width: 100%;
  height: 53px;
  margin-bottom: -5px;
  border-bottom: 5px solid ${colors.white};

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${colors.white};
  font-size: 22px;

  z-index: 2;
  pointer-events: none;
`;

const GoBack = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  height: 53px;
  line-height: 53px;
  padding-left: 16px;

  font-size: 16px;
  color: ${colors.property.green};
`;

export default MobileSkills;
