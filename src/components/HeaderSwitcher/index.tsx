import { useDispatch, useSelector } from "react-redux";
import { switchCard } from "../../redux/uiReducer";
import { RootState } from "redux/store";

const HeaderSwitcher = () => {
  const news = useSelector((state: RootState) => state.ui.isCard);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(switchCard());
      }}
      className="headerSwitcherButton"
    >
      Zmień widok:
      {news === true ? (
        <p className="switcherDecoration">kafelki na lista</p>
      ) : (
        <p className=" switcherDecoration">lista na kafelki</p>
      )}
    </button>
  );
};

export default HeaderSwitcher;
