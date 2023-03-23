import { FC } from "react";
import { UseUI } from "../../context/ContextUI";

interface CardsProps {
  urlToImage: string;
  newTitle: string;
  name: string;
  cardKey: string;
}

const Cards: FC<CardsProps> = ({ urlToImage, newTitle, name, cardKey }) => {
  const { openSidebar, closeSidebar } = UseUI();
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
      <div className="m-2">
        <h1 className="font-bold">{newTitle}</h1>
        <p className="uppercase text-stone-400 text-sm">{name}</p>
      </div>
    </div>
  );
};

export default Cards;
