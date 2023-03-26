import { formatDateTime, titleCutWords } from "../../../functions";
import { DataTypes } from "../../../types";
import { UseUI } from "../../context/ContextUI";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";

const Cards = ({ value, cardKey }: { value: DataTypes; cardKey: string }) => {
  const switcher = useSelector((state: RootState) => state.switch);
  const { isCard } = switcher;
  const { openSidebar } = UseUI();
  const { title, urlToImage, source, publishedAt } = value;
  const { name } = source;

  return (
    <div
      key={cardKey}
      className={`
      ${isCard ? "w-72 h-40 bg-red-50" : "w-80 h-20 bg-red-200"}
      ${urlToImage ? "text-white" : "text-black"}
       cursor-pointer flex flex-col justify-end  relative`}
      onClick={() => openSidebar()}
    >
      {urlToImage ? (
        <>
          <img
            className="bg-black h-full w-full absolute -z-20"
            src={`${urlToImage}`}
            alt="informationPicture"
          />
          <div className="absolute -z-10 w-full h-full bg-gradient-to-t from-black/50 to to-white/10 " />
        </>
      ) : null}
      <div className="p-2 bg-white/10">
        <h1 className="font-bold">{titleCutWords(title, 8)}</h1>
        <div className="flex justify-between">
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
