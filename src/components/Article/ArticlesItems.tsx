import { Cards } from "../ui";
import { titleCutWords } from "../../functions/text";
import { useSwitch } from "../context/ContextSwitch";
import { v4 as uuidv4 } from "uuid";
import { useData } from "../context/ContextGetInformation";

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
const ArticlesItems = () => {
  const { isCard } = useSwitch();
  const { data } = useData();

  return (
    <>
      {data?.map((value: ArticleTypes) => {
        const { title, urlToImage, source } = value;
        const { name } = source;
        const newTitle = titleCutWords(title);
        return isCard === true ? (
          <Cards
            urlToImage={urlToImage}
            newTitle={newTitle}
            name={name}
            key={uuidv4()}
            cardKey={uuidv4()}
          />
        ) : (
          <Cards
            urlToImage={urlToImage}
            newTitle={newTitle}
            name={name}
            key={uuidv4()}
            cardKey={uuidv4()}
          />
        );
      })}
    </>
  );
};

export default ArticlesItems;
