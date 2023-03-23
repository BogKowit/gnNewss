import { useState, useEffect } from "react";
import { fetchDataNews } from "../../utils/fetchDataNews";
import ArticlesItems from "./ArticlesItems";

type ArticleTypes = {
  author: string;
  title: string;
  description: string;
  url: string;
  source: Source;
  urlToImage: string;
  publishedAt: string;
};

type Source = {
  id: string;
  name: string;
};

const Article = () => {
  const [articles, setArticles] = useState<ArticleTypes[]>([]);

  const fetchDAta = async () => {
    const data = await fetchDataNews();
    const { articles } = data;
    setArticles(articles);
  };

  useEffect(() => {
    fetchDAta();
  }, []);

  return <ArticlesItems articles={articles}/>;
};

export default Article;
