const SKILLTREE_DEFAULT_PATH = "/assets/skilltree";

const createIconPath = (fileName: string) =>
  `${SKILLTREE_DEFAULT_PATH}/icons/${fileName}`;

const createFramePath = (fileName: string) =>
  `${SKILLTREE_DEFAULT_PATH}/frames/${fileName}`;

const createLinePath = (fileName: string) =>
  `${SKILLTREE_DEFAULT_PATH}/lines/${fileName}`;

const createPropertyIconPath = (fileName: string) =>
  `${SKILLTREE_DEFAULT_PATH}/propertyIcons/${fileName}`;

const assets = {
  icons: {
    cPlusPlus: createIconPath("C++.png"),
    emotion: createIconPath("Emotion.png"),
    jotai: createIconPath("Jotai.png"),
    nextjs: createIconPath("NextJs.png"),
    python: createIconPath("Python.png"),
    react: createIconPath("React.png"),
    reactQuery: createIconPath("ReactQuery.png"),
    styledComponents: createIconPath("StyledComponents.png"),
    svelte: createIconPath("Svelte.png"),
    tailwind: createIconPath("Tailwind.png"),
    typescript: createIconPath("Typescript.png"),
  },

  frames: {
    circle: {
      default: createFramePath("circle.png"),
      selected: createFramePath("circle_selected.png"),
    },
    hexagon: {
      default: createFramePath("hexagon.png"),
      selected: createFramePath("hexagon_selected.png"),
    },
    square: {
      default: createFramePath("square.png"),
      selected: createFramePath("square_selected.png"),
    },
  },

  lines: {
    down: createLinePath("_down.png"),
    leftDown: createLinePath("_left_down.png"),
    leftRight: createLinePath("_left_right.png"),
    leftDownRight: createLinePath("_left_down_right.png"),
    upDown: createLinePath("_up_down.png"),
    upDownRight: createLinePath("_up_down_right.png"),
    up: createLinePath("_up.png"),
  },

  propertyIcons: {
    api: createPropertyIconPath("api.png"),
    framework: createPropertyIconPath("framework.png"),
    heart: createPropertyIconPath("heart.png"),
    language: createPropertyIconPath("language.png"),
    state: createPropertyIconPath("state.png"),
    styling: createPropertyIconPath("styling.png"),
  },
};

export default assets;
