import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../../redux/uiReducer";
import PopUpTest from "../../PopUp/PopUpTest";
import BlurLock from "../DisabledBody";

interface Props {
  cardKey: string;
  urlToImage: string;
  title: string;
  datePublished: string;
  name: string;
  value: any;
}

const CardNews: FC<Props> = ({
  cardKey,
  urlToImage,
  title,
  datePublished,
  name,
  value,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  console.log(title, isOpen);

  return (
    <>
      <div
        onClick={() => {
          dispatch(openSidebar());
          console.log(cardKey);
          setIsOpen(true);
        }}
        key={cardKey}
        className={
          "w-full h-[25vw] md:w-56 md:h-32 lg:w-1/3 xl:w-1/4 2xl:w-1/5 text-white cursor-pointer flex flex-col justify-end shadow-xl relative m-4"
        }
      >
        {urlToImage !== null ? (
          <>
            <img
              className="bg-black h-full w-full absolute -z-20"
              src={urlToImage}
              alt="informationPicture"
            />
            <div className="absolute -z-10 w-full h-full bg-gradient-to-t from-black/50 to to-white/10 " />
          </>
        ) : (
          <div className="absolute -z-10 w-full h-full bg-black " />
        )}
        <div className="p-2 bg-black/10">
          <h1 className="font-bold">{title}</h1>
          <div className="flex justify-between">
            <p className="uppercase text-stone-400 text-sm">{name}</p>
            <p className="uppercase text-stone-400 text-sm">{datePublished}</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <BlurLock>
          <PopUpTest value={value} />
        </BlurLock>
      )}
    </>
  );
};

export default CardNews;
