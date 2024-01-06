import {useNavigate} from "react-router-dom";
import SubmitArticle from './SubmitArticle';

export default function CreateArticle({articles, setArticles}) {
    const navigate = useNavigate()

    return (
        <div>
            <p>在此添加一条新的文章</p>
            <div className="articleContainer">
                <SubmitArticle onAddArticle={
                    (title, content) => {
                        setArticles([
                            {
                            id: articles.length + 1,
                            title,
                            content
                            },
                            ...articles
                        ]);
                        navigate("/articles", {replace: false})
                    }
                } />    
            </div>
        </div>
    )
}