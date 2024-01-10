import { useState, useRef } from 'react';
import { TextField, Button } from '@mui/material';

export default function SubmitArticle({ onAddArticle }) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const content = useRef(null);

    return (
        <div className="add-article">
            <div className="form">
                <div className="form-row">
                    {/* <label>标题:</label>
                    <input type="text" value={title} onInput={e => setTitle(e.target.value)} /> */}
                    <TextField id="standard-basic" label="文章标题" variant="standard" value={title} onInput={e => setTitle(e.target.value)} />
                </div>
                <div className="form-row">
                    {/* <label>内容:</label>
                    <textarea rows={5}  ref={content} /> */}
                    <TextField id="standard-basic" label="文章内容" variant="standard" value={content} onInput={e => setContent(e.target.value)} multiline rows={5} />
                </div>
                <div className="form-row" style={{ flexDirection: 'row-reverse' }}>
                    {/* <button className="right-align"
                        style={{ flexBasis: '100px', flexGrow: 0 }}
                        onClick={() => onAddArticle(title, content.current.value)}>
                        添加
                    </button> */}
                    <Button variant="contained" 
                        className="right-align"
                        style={{ flexBasis: '100px', flexGrow: 0 }}
                        onClick={() => onAddArticle(title, content)}>
                            新建
                    </Button>
                </div>
            </div>
        </div>
    );
}