import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar, switchCard } from "../../redux/uiReducer";
import { RootState } from "../../redux/store";
import { Logo } from "../ui";
import BlurLock from "../ui/DisabledBody";
import PopUp from "../PopUp";

const Header = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: RootState) => state.ui.isCard);
  return (
    <nav className="bg-black text-white flex justify-between h-14 items-center px-4">
      <Link to="/">
        <Logo />
      </Link>
      <button
        onClick={() => {
          dispatch(openSidebar());
        }}
        className="bg-white focus:bg-gray-200 hover:bg-gray-200 flex font-semibold px-4 py-1 rounded-xl border w-auto items-center justify-center  text-black"
      >
        informacje
      </button>
      <BlurLock>
        <PopUp />
      </BlurLock>
      <button
        onClick={() => {
          dispatch(switchCard());
        }}
        className="bg-white flex focus:bg-gray-200 hover:bg-gray-200 font-semibold px-4 py-1 rounded-xl border w-56 items-center justify-center  text-black"
      >
        Zmień widok:{" "}
        {news === true ? (
          <p className=" decoration-pink-400 underline pl-1">lista</p>
        ) : (
          <p className=" decoration-pink-400 underline pl-1">kafelki</p>
        )}
      </button>
    </nav>
  );
};

export default Header;
