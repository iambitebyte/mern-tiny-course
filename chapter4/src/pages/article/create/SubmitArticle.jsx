import { useState, useRef } from 'react';

export default function SubmitArticle({ onAddArticle }) {

    const [title, setTitle] = useState('');
    const content = useRef(null);

    return (
        <div className="add-article">
            <div className="form">
                <div className="form-row">
                    <label>标题:</label>
                    <input type="text" value={title} onInput={e => setTitle(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>内容:</label>
                    <textarea rows={5}  ref={content} />
                    </div>
                <div className="form-row" style={{ flexDirection: 'row-reverse' }}>
                    <button className="right-align"
                        style={{ flexBasis: '100px', flexGrow: 0 }}
                        onClick={() => onAddArticle(title, content.current.value)}>
                        添加
                    </button>
                </div>
            </div>
        </div>
    );
}