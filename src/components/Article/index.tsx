import { useState, useEffect } from "react";
import { fetchDataNews } from "../../utils/fetchDataNews";
import { UIProvider } from "../context/ContextUI";
import ArticlesItems from "./ArticlesItems";

const Article = () => {

  return (
    <>
        <ArticlesItems />;
    </>
  );
};

export default Article;
