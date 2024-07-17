import { ComponentProps } from "react";

interface LayerProps extends ComponentProps<"div"> {
  width: React.CSSProperties["width"];
  height: React.CSSProperties["height"];
  layers: React.ReactNode[];
}

const Layer = ({ width, height, layers, ...rest }: LayerProps) => {
  return (
    <div
      style={{
        width,
        height,
        position: "relative",
      }}
      {...rest}
    >
      {layers.map((layer, index) => (
        <div
          key={index}
          style={{
            width,
            height,
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {layer}
        </div>
      ))}
    </div>
  );
};

export default Layer;
