import assets from "src/constants/assets";

export type HoveredTileRecord = {
  row: number;
  column: number;
} | null;

export interface TileInfo {
  row: number;
  column: number;
  line?: keyof typeof assets.skilltree.lines;
  frame?: keyof typeof assets.skilltree.frames;
  icon?: keyof typeof assets.skilltree.icons;
}

export type SelectedTileRecord = TileInfo | null;
