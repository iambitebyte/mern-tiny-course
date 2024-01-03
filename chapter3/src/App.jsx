import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleView from './ArticleView';
import AddArticleComponent from './AddArticleComponent';

function App() {

  /*
   * 获取当前文章的列表，同时我们可以通过useState方法来更新文章列表，useState的参数用来初始化列表内容。
   */
  const [articles, setArticles] = useState([]);

  /**
   * useEffect 也是控制状态的钩子函数，它的第二个参数是监视对象，通常是useState方法返回的状态变量，
   * 一旦状态变量发生变化，第一个参数所定义的函数就会被执行。
   * 通常我们把第二个参数定义为一个非状态变量来实现一个组件只执行一次的初始化方法。
   * 因为第二个参数不会再发生变化，所以渲染当前组件后，effect函数也不会被执行。
   */
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/articles");
      document.data = response.data;
      setArticles(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">

      <h1>文章</h1>
      <div className="articleContainer">

        {articles && articles.length > 0 ?
          articles.map(article => <ArticleView key={article.id} article={article} />) :
          <p>没有新的文章</p>}

        {/**
          * AddArticleComponent 是一个jsx组件，点击组件中的添加按钮后 onAddArticle 方法会被调用。
          * 通过执行 setArticles 来改变 articles 的状态，这里并不是在articles数组里面添加一个元素，而是生成了一个新的数组。
          * 最终，状态的变化引起App组件的重新渲染。 
          */}
        <AddArticleComponent onAddArticle={(title, content) => setArticles([
          {
            id: articles.length + 1,
            title,
            content
          },
          ...articles
        ])} />

      </div>

    </div>
  );
}

export default App;