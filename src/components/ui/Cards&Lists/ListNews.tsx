import { FC } from "react";
import { ListNewsProps } from "../../../types";

const ListNews: FC<ListNewsProps> = ({ title, datePublished, name }) => (
  <div className="listNewsWrapper">
    <h1 className="listNewsTopic">{title}</h1>
    <div className="flex justify-between">
      <p className="listNewsInformation">{name}</p>
      <p className="listNewsInformation">{datePublished}</p>
    </div>
  </div>
);
export default ListNews;
