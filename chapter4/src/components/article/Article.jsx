/**
 * 显示文章标题和内容
 * @param {*} article 
 * @returns 
 */
export default function Article({ article }) {
    return (
        <div className="article">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
}