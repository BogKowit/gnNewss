import { FC } from "react";

interface Props {
  cardKey: string;
  title: string;
  datePublished: string;
  name: string;
}

const ListNews: FC<Props> = ({ cardKey, title, datePublished, name }) => (
  <div
    key={cardKey}
    className="bg-gray-100 hover:bg-gray-200 shadow-lg grid  focus:bg-gray-200 w-full p-1 border border-gray-400 rounded-xl my-1 mx-2"
  >
    <h1 className="font-bold">{title}</h1>
    <div className="flex justify-between">
      <p className="uppercase text-stone-400 text-sm">{name}</p>
      <p className="uppercase text-stone-400 text-sm">{datePublished}</p>
    </div>
  </div>
);
export default ListNews;
