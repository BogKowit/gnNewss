import { useDispatch } from "react-redux";
import { openPopUpAboutMe } from "../../redux/uiReducer";

const PopUpButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(openPopUpAboutMe());
      }}
      className="popUpButton"
    >
      informacje
    </button>
  );
};

export default PopUpButton;
