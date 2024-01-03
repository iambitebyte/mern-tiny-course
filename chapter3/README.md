# React的状态控制
## React的状态是什么？
React是一款用于构建用户界面的JavaScript库，它通过组件化的方式让开发者更容易构建复杂的用户界面。其中，状态（State）是 React 中的一个关键概念，它允许组件随数据变化而重新渲染，从而实现动态、交互性强的用户界面。本章节，我们将介绍 React 中状态组件的基本概念，并深入讨论三个重要的Hook方法：`useState`、`useEffect` 和 `useRef`。

## useState
`useState`用于在函数组件中引入局部状态。它返回一个数组，包含当前状态和更新状态的函数。以下是 useState 的基本用法：
```
  // title的状态变化会引起组件刷新
  const [title, setTitle] = useState('');

  <input type="text" value={title} onInput={e => setTitle(e.target.value)} />

```

## useEffect
`useEffect`是 React 提供的处理副作用的Hook，例如数据获取、订阅、手动操作 DOM 等。它在每次组件渲染后执行。以下是 useEffect 的一个简单例子：
```
useEffect(() => {
  async function fetchData() {
    const response = await axios.get("/articles");
    document.data = response.data;
    setArticles(response.data);
  }
  fetchData();
}, []);
```

## useRef
`useRef` 是 React 提供的用于访问和修改 DOM 元素的 Hook。它返回一个可变的对象，该对象的 current 属性指向传递给 useRef 的初始值。以下是 useRef 的一个简单例子：
```
const content = useRef(null);

<textarea rows={5}  ref={content} />

onClick={() => onAddArticle(title, content.current.value)}>
```

## 状态组件的设计思想
React 的设计思想之一是将用户界面抽象成一个由组件构成的层次结构。每个组件都可以拥有自己的状态，这些状态可以通过 props 传递给子组件。状态的变化触发组件的重新渲染，使得 React 应用能够有效地响应用户的交互。

状态组件的设计思想中，有几个关键概念：

- 单一数据源： React 鼓励使用单一数据源来管理应用的状态。这意味着，整个应用的状态应该被存储在最顶层的组件中，然后通过 props 传递给子组件。
- 不可变性： React 鼓励使用不可变的数据结构来管理状态。当状态需要更新时，应该创建一个新的状态对象，而不是直接修改原始状态。
- 单向数据流： 数据在应用中是单向流动的，即从顶层组件到底层组件。这种单向数据流使得应用的数据流动变得可控和可预测。

## 示例
```
npm install 
npm run dev
```