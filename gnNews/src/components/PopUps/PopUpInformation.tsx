import { FC } from "react";
import { PopUpButtonClose } from "components";

interface Props {
  value?: any;
}

const PopUpInformation: FC<Props> = ({ value }) => (
  <article className="popUpWrapper">
    <div className="prose text-black">
      <h1 className="text-xl">{value.title}</h1>
      <h2 className="text-lg">
        {value.author ? value.author : "author unknown"}
      </h2>
      <p>{value.content}</p>
      <p>{value.description}</p>
      <div
        className="flex cursor-pointer space-x-1"
        onClick={() => {
          window.open(`${value.url}`);
        }}
      >
        <p>Dowiedz się więcej:</p>
        <p>{value.url}</p>
      </div>
    </div>
    <PopUpButtonClose />
  </article>
);

export default PopUpInformation;
