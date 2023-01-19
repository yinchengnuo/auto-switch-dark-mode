/*
 * @Author: 尹成诺
 * @Date: 2023-01-19 09:54:15
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-01-19 12:18:26
 * @Description: file content
 */

import { MODE } from './lib/main'

declare interface AutoSwitchDarkMode {
  getMode: () => MODE
  setMode: (_?: MODE) => MODE
}

export default AutoSwitchDarkMode