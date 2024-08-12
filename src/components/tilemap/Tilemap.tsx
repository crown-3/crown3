import { CSSProperties, Dispatch, SetStateAction } from "react";
import assets from "src/constants/assets";
import { DISABLE_USER_SELECT } from "src/constants/defaults";
import { SelectedTileRecord } from "src/types/tile";
import styled, { css, keyframes } from "styled-components";

import Tile from "./Tile";

export interface TileInfo {
  row: number;
  column: number;
  line?: keyof typeof assets.skilltree.lines;
  frame?: keyof typeof assets.skilltree.frames;
  icon?: keyof typeof assets.skilltree.icons;
}

interface TilemapProps {
  tileSize: React.CSSProperties["width"];
  rows: number;
  columns: number;
  tileInfos: TileInfo[];
  onTileClick?: () => void;

  selectedTileState: [
    SelectedTileRecord,
    Dispatch<SetStateAction<SelectedTileRecord>>,
  ];
}

const SizeUpAnimation = keyframes`
0% {
  transform: scale(0);
}

100% {
  transform: scale(1);
}
`;

const TileWrapper = styled.div<{
  $row: number;
  $column: number;
  $animationDelay: number;
  $tileSize: CSSProperties["width"];
}>`
  position: absolute;
  cursor: pointer;

  transform: scale(0);

  ::after {
    transform: scale(1);
  }

  animation: ${SizeUpAnimation} 0.3s forwards
    cubic-bezier(0.15, 0.65, 0.23, 0.93);

  ${({ $tileSize, $row, $column, $animationDelay }) => css`
    width: ${$tileSize};
    height: ${$tileSize};
    top: calc(${$tileSize} * ${$row});
    left: calc(${$tileSize} * ${$column});
    animation-delay: ${$animationDelay}s;
  `}
`;

const Tilemap = ({
  tileSize,
  rows,
  columns,
  tileInfos,
  onTileClick: onTileClickProp,
  selectedTileState: [selectedTile, setSelectedTile],
}: TilemapProps) => {
  const onTileClick = (tileInfo: TileInfo) => {
    setSelectedTile(tileInfo);
    onTileClickProp?.();
  };

  return (
    <div
      style={{
        width: `calc(${columns} * ${tileSize})`,
        height: `calc(${rows} * ${tileSize})`,
        position: "relative",
        ...DISABLE_USER_SELECT,
      }}
    >
      {tileInfos.map((tileInfo) => {
        const isSelectedTile =
          selectedTile?.row === tileInfo.row &&
          selectedTile.column === tileInfo.column;

        return (
          <TileWrapper
            key={`${tileInfo.row}-${tileInfo.column}`}
            $row={tileInfo.row}
            $column={tileInfo.column}
            $tileSize={tileSize}
            $animationDelay={tileInfo.row * 0.1}
            onClick={() => {
              if (!tileInfo.icon) return;
              onTileClick(tileInfo);
            }}
            id={`row:${tileInfo.row}, column:${tileInfo.column}`}
          >
            <Tile
              tileSize={tileSize}
              tileInfo={tileInfo}
              isSelected={isSelectedTile}
            />
          </TileWrapper>
        );
      })}
    </div>
  );
};

export default Tilemap;
