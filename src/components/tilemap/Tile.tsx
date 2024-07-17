import { useState } from "react";
import assets from "src/constants/assets";

import Layer from "../common/Layer";
import Pixel from "../common/Pixel";
import { TileInfo } from "./Tilemap";

interface TileProps {
  tileSize: React.CSSProperties["width"];
  tileInfo: TileInfo;
  isSelected: boolean;
}

const Tile = ({ tileSize, tileInfo, isSelected }: TileProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const onTileMouseEnter = () => {
    setIsHovering(true);
  };

  const onTileMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Layer
      width={tileSize}
      height={tileSize}
      onMouseEnter={onTileMouseEnter}
      onMouseLeave={onTileMouseLeave}
      layers={[
        tileInfo.line ? (
          <Pixel
            width={tileSize}
            height={tileSize}
            src={assets.lines[tileInfo.line]}
          />
        ) : null,

        tileInfo.frame ? (
          <Pixel
            width={tileSize}
            height={tileSize}
            src={
              isHovering || isSelected
                ? assets.frames[tileInfo.frame].selected
                : assets.frames[tileInfo.frame].default
            }
          />
        ) : null,

        tileInfo.icon ? (
          <Pixel width="50%" height="50%" src={assets.icons[tileInfo.icon]} />
        ) : null,
      ].filter((layer) => layer !== null)}
    />
  );
};

export default Tile;
