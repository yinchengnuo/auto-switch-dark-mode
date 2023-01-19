/*
 * @Author: 尹成诺
 * @Date: 2023-01-19 09:54:15
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-01-19 11:26:18
 * @Description: file content
 */

enum MODE_TYPE {
  DARK = "dark",
  LIGHT = "light",
}

type MODE = MODE_TYPE.DARK | MODE_TYPE.LIGHT;

export default class AutoSwitchDarkMode {
  constructor() {
    this.#mode = this.getMode();
    this.setMode(this.#mode);
    matchMedia("(prefers-color-scheme: dark)").onchange = () => {
      this.setMode(this.getMode());
    };
  }
  #mode = MODE_TYPE.LIGHT;
  #css = 'html { background: #fff; filter: invert(1) hue-rotate(.5turn); } img { opacity: 0.8; filter: invert(1) hue-rotate(.5turn); }';
  getMode(): MODE {
    if (matchMedia("(prefers-color-scheme: dark)").matches) {
      return MODE_TYPE.DARK;
    }
    return MODE_TYPE.LIGHT;
  }
  setMode(mode?: MODE): MODE {
    if (mode) {
      this.#mode = mode;
    } else {
      this.#mode =
        this.#mode === MODE_TYPE.DARK ? MODE_TYPE.LIGHT : MODE_TYPE.DARK;
    }
    if (this.#mode === MODE_TYPE.DARK) {
      document.head.appendChild(
        new DOMParser().parseFromString(
          `<style>${this.#css}</style>`,
          "text/html"
        ).head.children[0] as HTMLStyleElement
      );
    }
    if (this.#mode === MODE_TYPE.LIGHT) {
      Array.from(document.head.children)
        .filter((e) => e.tagName === "STYLE" && e.textContent === this.#css)[0]
        ?.remove();
    }
    return this.#mode;
  }
}
