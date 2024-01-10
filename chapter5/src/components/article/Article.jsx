/**
 * 显示文章标题和内容
 * @param {*} article 
 * @returns 
 */

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Article({ article }) {
    return (
        // <div className="article">
        //     <h2>{article.title}</h2>
        //     <p>{article.content}</p>
        // </div>

        <Box sx={{ width: '100%' }}>
            <Typography variant="h4" gutterBottom>{article.title}</Typography>
            <Typography variant="overline" display="block" gutterBottom>
                {article.content}
            </Typography>
        </Box>
    );
}