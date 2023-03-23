import { Cards } from "../ui";
import { titleCutWords } from "../../functions/text";
import { useSwitch } from "../context/ContextSwitch";

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
const ArticlesItems = ({ articles }: { articles: ArticleTypes[] }) => {
  const { isCard } = useSwitch();

  return (
    <>
      {articles?.map((value) => {
        const { title, urlToImage, source } = value;
        const { name } = source;
        const newTitle = titleCutWords(title);
        return isCard === true ? (
          <Cards urlToImage={urlToImage} newTitle={newTitle} name={name} />
        ) : (
          <Cards urlToImage={urlToImage} newTitle={newTitle} name={name} />
        );
      })}
    </>
  );
};

export default ArticlesItems;
