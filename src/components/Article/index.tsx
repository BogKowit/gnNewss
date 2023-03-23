import React, { useState, useEffect } from "react";
import { titleCutWords } from "../../functions/text";
import { fetchDataNews } from "../../utils/fetchDataNews";
type Article = {
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
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchDAta = async () => {
    const data = await fetchDataNews();
    const { articles } = data;
    setArticles(articles);
  };

  useEffect(() => {
    fetchDAta();
  }, []);

  console.log(articles);
  return (
    <div className=" grid gap-4">
      {articles?.map((value) => {
        const { title, urlToImage, source } = value;
        const { name } = source;
        const newTitle = titleCutWords(title);
        console.log(source);
        return (
          <div className="w-72 h-40 flex flex-col justify-end text-white relative">
            <img
              className="bg-black h-full w-full absolute -z-20"
              src={`${urlToImage}`}
            />
            <div className="absolute -z-10 w-full h-full bg-gradient-to-t from-black/50 to to-white/10 " />
            <div className="m-2">
              <h1 className="font-bold">{newTitle}</h1>
              <p className="uppercase text-stone-400 text-sm">{name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Article;
