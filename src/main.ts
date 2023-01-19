/*
 * @Author: 尹成诺
 * @Date: 2023-01-19 09:54:15
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-01-19 11:46:12
 * @Description: file content
 */
import AutoSwitchDarkMode from "../lib/main";

const mode = new AutoSwitchDarkMode();

document.onclick = () => {
  mode.setMode()
}
