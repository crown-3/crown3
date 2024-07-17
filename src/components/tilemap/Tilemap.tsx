import { CSSProperties, Dispatch, SetStateAction } from "react";
import assets from "src/constants/assets";
import { DISABLE_USER_SELECT } from "src/constants/defaults";
import { SelectedTileRecord } from "src/types/tile";
import styled, { css } from "styled-components";

import Tile from "./Tile";

export interface TileInfo {
  row: number;
  column: number;
  line?: keyof typeof assets.lines;
  frame?: keyof typeof assets.frames;
  icon?: keyof typeof assets.icons;
}

interface TilemapProps {
  tileSize: React.CSSProperties["width"];
  rows: number;
  columns: number;
  tileInfos: TileInfo[];

  selectedTileState: [
    SelectedTileRecord,
    Dispatch<SetStateAction<SelectedTileRecord>>,
  ];
}

const TileWrapper = styled.div<{
  $row: number;
  $column: number;
  $tileSize: CSSProperties["width"];
}>`
  position: absolute;
  cursor: pointer;

  ${({ $tileSize, $row, $column }) => css`
    width: ${$tileSize};
    height: ${$tileSize};
    top: calc(${$tileSize} * ${$row});
    left: calc(${$tileSize} * ${$column});
  `}
`;

const Tilemap = ({
  tileSize,
  rows,
  columns,
  tileInfos,
  selectedTileState: [selectedTile, setSelectedTile],
}: TilemapProps) => {
  const onTileClick = (tileInfo: TileInfo) => {
    setSelectedTile(tileInfo);
  };

  const onTileDismiss = () => {
    setSelectedTile(null);
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
            onClick={() => {
              onTileClick(tileInfo);
            }}
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
