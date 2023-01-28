/*
 * @Author: 尹成诺
 * @Date: 2023-01-19 09:54:15
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-01-28 19:00:30
 * @Description: file content
 */

import { MODE } from './lib/main'

declare function getMode(): MODE

declare function setMode(_?: MODE): MODE

declare function useAutoSwitchDarkMode(): void