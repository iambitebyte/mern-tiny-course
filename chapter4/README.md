# React的路由机制
react可以通过`react-router-dom`库提供灵活的路由控制。

## 前端和后端的路由区别
- 后端（服务端）：Java是我们常见的后端开发编程语言，Spring MVC的路由是在服务器端处理的，每个路由都需要服务器发起一次请求，导致整个页面的刷新。优点是每次请求返回整个html数据，适合SEO，缺点是频发通过http请求刷新页面会让用户感觉明显的延迟。
- 前端： 路由的映射和控制逻辑由js代码定义，整个页面不刷新，以提升用户体验，并保存react各组件的状态。优点是用户体验更高，缺点是SEO难以实现。

## React Route的路由模式
- HashRouter：由url中的哈希（#）来实现，适合用于不支持 html5 history API 的旧浏览器。
```
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}
```

- BrowserRouter：url不需要哈希（#），适合现代浏览器(`history.pushState`用来修改浏览器url)
```
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}
```

## 示例
```
npm install 
npm run dev
```