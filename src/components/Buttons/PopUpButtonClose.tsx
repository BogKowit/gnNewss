import { closePopUps } from "../../redux/uiReducer";
import { useDispatch } from "react-redux";

const PopUpButtonClose = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="popUpButtonClose"
      onClick={() => {
        dispatch(closePopUps());
      }}
    >
      X
    </button>
  );
};

export default PopUpButtonClose;
