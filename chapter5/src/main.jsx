import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {//我们使用Browser路由
    }
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)