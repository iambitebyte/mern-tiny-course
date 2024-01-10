import {useNavigate} from "react-router-dom";
import SubmitArticle from './SubmitArticle';
import { Alert } from "@mui/material";

export default function CreateArticle({articles, setArticles}) {
    const navigate = useNavigate()

    return (
        <div>
            <Alert severity="info">在此添加一条新的文章</Alert>
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