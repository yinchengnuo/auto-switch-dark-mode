# auto-switch-dark-mode

仅需一行代码就能让你的网站自动实现暗黑模式。

## 安装

### 包管理器

使用 npm:

```bash
$ npm install auto-switch-dark-mode
```

使用 yarn:

```bash
$ yarn add auto-switch-dark-mode
```

使用 pnpm:

```bash
$ pnpm add auto-switch-dark-mode
```

## 使用

```js
import AutoSwitchDarkMode from "../lib/main";

const { getMode, setMode } = new AutoSwitchDarkMode();
```

### getMode

```ts
(): "dark" | "light"
```

### setMode

```ts
(mode?: "dark" | "light"): "dark" | "light"
```

*setMode 不传参数 mode 根据当前 mode 自动取反，返回值为设置后的当前 mode*