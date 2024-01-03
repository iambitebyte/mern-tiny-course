import { useState, useRef } from 'react';

export default function AddArticleComponent({ onAddArticle }) {

    // title的状态变化会引起组件刷新
    const [title, setTitle] = useState('');

    // content是没有状态管理的
    const content = useRef(null);

    return (
        <div className="add-article">
            <h2>添加文章</h2>
            <div className="form">
                <div className="form-row">
                    <label>标题:</label>
                    {/** 
                      * 通过监听input标签的更新事件，拿到最新输入的值以后，要通过 setTitle 来更新状态，这样 input 标签的value才会有反应。
                      * 如果连续输入，onInput里面的 setTitle 会连续执行，这是典型的mvc机制，视图和模型实现了绑定。
                      */}
                    <input type="text" value={title} onInput={e => setTitle(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>内容:</label>
                    {/* 内容是引用对象，不需要管理它的变化 */}
                    <textarea rows={5}  ref={content} />
                    </div>
                <div className="form-row" style={{ flexDirection: 'row-reverse' }}>
                    {/* 添加按钮按下后，调用的是父组件传入的函数 */}
                    <button className="right-align"
                        style={{ flexBasis: '100px', flexGrow: 0 }}
                        // onClick={() => onAddArticle(title, content)}>
                        onClick={() => onAddArticle(title, content.current.value)}>
                        添加
                    </button>
                </div>
            </div>
        </div>
    );
}