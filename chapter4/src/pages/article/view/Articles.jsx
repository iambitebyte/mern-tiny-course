import Article from '../../../components/article/Article';

export default function Articles({articles}) {

    return (
        <div>
            <div className="articleContainer">
                {articles && articles.length > 0 ?
                    articles.map(article => <Article key={article.id} article={article} />) :
                    <p>没有新的文章</p>}
            </div>
        </div>
    )
}