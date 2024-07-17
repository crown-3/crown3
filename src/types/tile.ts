import assets from "src/constants/assets";

export type HoveredTileRecord = {
  row: number;
  column: number;
} | null;

export interface TileInfo {
  row: number;
  column: number;
  line?: keyof typeof assets.lines;
  frame?: keyof typeof assets.frames;
  icon?: keyof typeof assets.icons;
}

export type SelectedTileRecord = TileInfo | null;
