# React的页面样式设计
对前端开发工程师来说，页面设计的品质至关重要。

## CSS-in-JS
React推崇了`CSS-in-JS`的设计理念，开发者可以将样式直接嵌入到自己编写的React组件中。这种方式能够更好地封装组件，使得样式与组件的逻辑更为紧密地结合在一起。同时，`CSS-in-JS`还带来了更好的命名空间控制，避免了样式冲突的问题。
```
// 使用 CSS-in-JS 的例子
import { styled } from '@mui/system';

const StyledButton = styled('button')({
  color: 'white',
  backgroundColor: 'blue',
  padding: '10px',
});
```

## CSS模块化
React也支持CSS模块化，这使得开发者可以将样式文件与组件文件关联在一起。这种方式有助于提高代码的可维护性和可读性，并降低样式冲突的概率。
```
/* Button.module.css */

.button {
  color: white;
  background-color: blue;
  padding: 10px;
}

jsx

// 在 React 组件中使用 CSS 模块
import React from 'react';
import styles from './Button.module.css';

const Button = () => {
  return <button className={styles.button}>Click me</button>;
};
```

# Material-UI（MUI）
MUI 是一个流行的 React UI 框架，它基于 Google 的 Material Design 指南构建。
https://mui.com/material-ui/getting-started/

## MUI预制组件
MUI 提供了大量的预设计的 React 组件，例如按钮，列表，输入框，表格等等，也包括svg图标。这些组件不仅符合 Material Design 规范，而且高度可定制。

```
import { Button } from '@mui/material';

const MyButton = () => {
  return <Button variant="contained">Click me</Button>;
};
```

## 主题定制
MUI 的主题系统允许开发者轻松定制整个应用程序的外观。通过定义主题变量，开发者可以一次性更改应用程序中所有组件的颜色、字体等样式。

```
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#FF4081',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* 应用程序的其他部分 */}
    </ThemeProvider>
  );
};
```

# 示例
```
npm install 
npm run dev
```