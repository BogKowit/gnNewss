import { FC } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../redux/uiReducer";

interface Props {
  value?: any;
}

const PopUpInformation: FC<Props> = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <article
      className="bg-gray-100 text-xs sm:text-md md:text-lg  py-4 px-8 rounded-xl shadow-xl border border-black
       shadow-white text-black m-2 relative prose"
    >
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

      <button
        className="absolute right-4 top-4 md:right-8 md:top-8 text-white bg-red-400 p-2 rounded-md scale-x-150 font-semibold"
        onClick={() => {
          dispatch(closeSidebar());
        }}
      >
        X
      </button>
    </article>
  );
};

export default PopUpInformation;
