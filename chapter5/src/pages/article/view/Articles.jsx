import { List, Alert } from "@mui/material";
import Article from '../../../components/article/Article';

export default function Articles({articles}) {

    return (
        <div>
            {/* <div className="articleContainer"> */}
            <List>
                {articles && articles.length > 0 ?
                    articles.map(article => <Article key={article.id} article={article} />): 
                    <Alert severity="warning">没有新的文章!</Alert>
                }
            </List>
            {/* </div> */}
        </div>
    )
}