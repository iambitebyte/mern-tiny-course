import { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from './pages/article/view/Articles';
import CreateArticle from './pages/article/create/CreateArticle';
//路由的功能来自于 react-router-dom
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Narbar from './pages/navbar/Navbar';

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/articles");
      document.data = response.data;
      setArticles(response.data);
    }
    fetchData();
  }, []);

  /**
   * 
   */
  const navigate = useNavigate();

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Narbar />}>
          <Route index element={<Navigate to="articles" replace />} />
          <Route path="articles" element={<Articles articles={articles}/>} />
          <Route path="new" element={<CreateArticle articles={articles} setArticles={setArticles}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;