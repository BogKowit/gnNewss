import { createContext, useContext, useState, useEffect } from "react";
import { fetchDataNewsByCountry } from "../../utils/fetchDataNewsByCountry";

type DataContextValue = {
  data: ArticleTypes[];
};

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

const DataContext = createContext<DataContextValue | undefined>(undefined);

const useData = (): DataContextValue => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Data undefined");
  }
  return context;
};

const DataProvider = ({
  children,
  country,
}: {
  children: React.ReactNode | React.ReactNode[];
  country?: string;
}) => {
  const [data, setData] = useState<ArticleTypes[]>([]);

  useEffect(() => {
    const fetchDAta = async () => {
      if (country) {
        const data = await fetchDataNewsByCountry(country);
        const { articles } = data;
        setData(articles);
      } else {
        const data = await fetchDataNewsByCountry();
        const { articles } = data;
        setData(articles);
      }
    };
    fetchDAta();
  }, []);

  const value = { data };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { useData, DataProvider };
