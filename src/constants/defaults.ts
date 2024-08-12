export const MOBILE_BREAKPOINT_PX = 768;
export const MOBILE_BREAKPOINT = "768px";

export const DESKTOP_PAGESIDEGAP = "100px";
export const MOBILE_PAGESIDEGAP = "25px";

export const CONTENT_AREA_DESKTOP = `calc(100% - 2 * ${DESKTOP_PAGESIDEGAP})`;
export const CONTENT_AREA_MOBILE = `calc(100% - 2 * ${MOBILE_PAGESIDEGAP})`;

export const APPLE_SHADOW: React.CSSProperties["boxShadow"] =
  "0px 4px 40px 0px #EEE, 0px 4px 8px 0px rgba(66, 71, 76, 0.05), 0px 0px 0.5px 0px rgba(66, 71, 76, 0.32)";

export const DISABLE_USER_SELECT: React.CSSProperties = {
  WebkitUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
};
