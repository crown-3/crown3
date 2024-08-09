interface Assets {
  [key: string]: string | Assets;
}

const assetsPaths = {
  icons: {
    cPlusPlus: "C++.png",
    emotion: "Emotion.png",
    jotai: "Jotai.png",
    nextjs: "NextJs.png",
    python: "Python.png",
    react: "React.png",
    reactQuery: "ReactQuery.png",
    styledComponents: "StyledComponents.png",
    svelte: "Svelte.png",
    tailwind: "Tailwind.png",
    typescript: "Typescript.png",

    aseprite: "Aseprite.png",
    figma: "Figma.png",
    lottie: "Lottie.png",
    phase: "Phase.png",
    powerpoint: "Powerpoint.png",
  },

  frames: {
    circle: {
      default: "circle.png",
      selected: "circle_selected.png",
    },
    hexagon: {
      default: "hexagon.png",
      selected: "hexagon_selected.png",
    },
    square: {
      default: "square.png",
      selected: "square_selected.png",
    },
  },

  lines: {
    down: "_down.png",
    leftDown: "_left_down.png",
    leftRight: "_left_right.png",
    leftDownRight: "_left_down_right.png",
    upDown: "_up_down.png",
    upDownRight: "_up_down_right.png",
    up: "_up.png",
  },

  propertyIcons: {
    api: "api.png",
    framework: "framework.png",
    heart: "heart.png",
    language: "language.png",
    state: "state.png",
    styling: "styling.png",
    animation: "animation.png",
    tool: "program.png",
  },

  ui: {
    close: "close.png",
  },
};

const generatePaths = (basePath: string, obj: Assets): Assets => {
  const result: Assets = {};

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      result[key] = generatePaths(`${basePath}/${key}`, obj[key] as Assets);
    } else {
      result[key] = `${basePath}/${obj[key] as string}`;
    }
  }

  return result;
};

const baseAssetsPath = "/assets/skilltree";

// @ts-ignore
const assets: typeof assetsPaths = generatePaths(baseAssetsPath, assetsPaths);

export default assets;
