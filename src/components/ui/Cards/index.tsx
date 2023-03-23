import React from "react";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

interface CardsProps {
  urlToImage: string;
  newTitle: string;
  name: string;
}

const Cards: FC<CardsProps> = ({ urlToImage, newTitle, name }) => {
  const key = uuidv4()
  return (
    <div
      key={key}
      className="w-72 h-40 flex flex-col justify-end text-white relative"
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
      {key}
    </div>
  );
};

export default Cards;
