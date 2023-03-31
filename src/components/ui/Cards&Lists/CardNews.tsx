import { FC } from "react";
import { CardNewsProps } from "../../../types";

const CardNews: FC<CardNewsProps> = ({
  urlToImage,
  title,
  datePublished,
  name,
}) => (
  <div className={"cardsNewsWrapper"}>
    {urlToImage !== null ? (
      <>
        <img
          className="cardsNewsImg"
          src={urlToImage}
          alt="informationPicture"
        />
        <div className="cardsNewsBlur bg-gradient-to-t from-black/50 to-white/10 " />
      </>
    ) : (
      <div className="cardsNewsNoImg " />
    )}
    <div className="cardsNewsTextDownWrapper">
      <h1 className="font-bold">{title}</h1>
      <div className="flex justify-between ">
        <p className="uppercase text-stone-400 text-sm">{name}</p>
        <p className="uppercase text-stone-400 text-sm">{datePublished}</p>
      </div>
    </div>
  </div>
);

export default CardNews;
