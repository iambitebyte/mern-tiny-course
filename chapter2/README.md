# 使用脚手架工具
## 脚手架是什么？
前端常见的工具有：脚手架，构建工具

脚手架：
- Create React App
- Vite
- Angular Cli
  
前端构建工具：
- gulp
- webpack
  
## npm的作用
npm全名叫做`Node Package Management`，其中关键的文件如下：
- package.json（文件）
- package.lock.json（文件）
- node_modules（文件夹）

## npm常用的操作
- npm init
- npm install
- npm install -g
- npm install --save-dev
- npm uninstall
- npm run

初学node的时候，--save-dev 需要留意一下，在pip或mvn里面没有这个概念。参考：
```
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react-swc": "^3.0.0",
    "vite": "^4.1.0"
  }
}
一些需要注意的地方：
```
1. `devDependencies`里面的包是通过 --save-dev 安装的，只有在本地开发环境加载
2. `Dependencies`里面的包会最终打包到生产目录用于发布
3. @代表作用域，比如@types开头的包使用ts编写的

## vite如何使用
- vite
- vite build
- vite preview
  
`vite`需要一个配置文件，叫做 `vite.config.js`
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```
## 示例代码
我列出关键点供大家参考：
- `index.jsx`和`App.jsx`引用了react代码中的样式文件
- `App.jsx`里面引用的vite和react的图表文件
- 使用 useCount 来更新页面点击次数