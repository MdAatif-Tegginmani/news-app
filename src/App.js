import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { useState, useEffect } from "react";
import NewsContent from "./components/NewsContent/NewsContent.jsx";
import axios from "axios";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setloadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${category}&pageSize=${loadMore}`
      );

      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadMore]);

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray.filter(
          (f) => f.urlToImage !== null && f.urlToImage !== undefined
        )}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setloadMore}
      />

      <Footer />
    </div>
  );
}

export default App;
