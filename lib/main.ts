/*
 * @Author: 尹成诺
 * @Date: 2023-01-19 09:54:15
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-01-19 12:28:29
 * @Description: file content
 */

enum MODE_TYPE {
  DARK = "dark",
  LIGHT = "light",
}

export type MODE = MODE_TYPE.DARK | MODE_TYPE.LIGHT;

const css =
  "html { background: #fff; filter: invert(1) hue-rotate(.5turn); } img { opacity: 0.8; filter: invert(1) hue-rotate(.5turn); }";

export const getMode = (): MODE => {
  if (matchMedia("(prefers-color-scheme: dark)").matches) {
    return MODE_TYPE.DARK;
  }
  return MODE_TYPE.LIGHT;
};

let MODE = getMode();

export const setMode = (mode?: MODE): MODE => {
  if (mode) {
    MODE = mode;
  } else {
    MODE = MODE === MODE_TYPE.DARK ? MODE_TYPE.LIGHT : MODE_TYPE.DARK;
  }
  if (MODE === MODE_TYPE.DARK) {
    document.head.appendChild(
      new DOMParser().parseFromString(`<style>${css}</style>`, "text/html").head
        .children[0] as HTMLStyleElement
    );
  }
  if (MODE === MODE_TYPE.LIGHT) {
    Array.from(document.head.children)
      .filter((e) => e.tagName === "STYLE" && e.textContent === css)[0]
      ?.remove();
  }
  return MODE;
};

setMode(MODE);

matchMedia("(prefers-color-scheme: dark)").onchange = () => {
  setMode(getMode());
};
