import { formatDateTime, titleCutWords } from "../../../functions";
import { UseUI } from "../../context/ContextUI";

const Cards = ({
  value,
  cardKey,
}: {
  value: ArticleTypes;
  cardKey: string;
}) => {
  const { openSidebar } = UseUI();
  const { title, urlToImage, source, publishedAt } = value;
  const { name } = source;
  console.log(value);

  return (
    <div
      key={cardKey}
      className="w-72 h-40 cursor-pointer flex flex-col justify-end text-white relative"
      onClick={() => openSidebar()}
    >
      <img
        className="bg-black h-full w-full absolute -z-20"
        src={`${urlToImage}`}
        alt="informationPicture"
      />
      <div className="absolute -z-10 w-full h-full bg-gradient-to-t from-black/50 to to-white/10 " />
      <div className="p-2 bg-white/10">
        <h1 className="font-bold">{titleCutWords(title, 8)}</h1>
        <div>
          <p className="uppercase text-stone-400 text-sm">{name}</p>
          <p className="uppercase text-stone-400 text-sm">
            {formatDateTime(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;

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
