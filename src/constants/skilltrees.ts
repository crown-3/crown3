import { TileInfo } from "src/types/tile";

import { TILEINFOS_DESIGN, TILEINFOS_DEVELOPMENT } from "./tileInfo";

export enum TreeVariants {
  DEVELOPMENT = "development",
  DESIGN = "design",
}

export interface Tree {
  type: TreeVariants;
  tileInfos: TileInfo[];
}

export const TREES: Tree[] = [
  {
    type: TreeVariants.DEVELOPMENT,
    tileInfos: TILEINFOS_DEVELOPMENT,
  },
  // {
  //   type: TreeVariants.DESIGN,
  //   tileInfos: TILEINFOS_DESIGN,
  // },
];
