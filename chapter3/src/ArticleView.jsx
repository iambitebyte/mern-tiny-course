export default function ArticleView({ article }) {
    // article样式通过父组件来引入
    return (
        <div className="article">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
}