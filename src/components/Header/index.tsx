import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { switchCard } from "../../redux/switchReducer";

const Header = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const dispatch = useDispatch();
  const switcher = useSelector((state: RootState) => state.switch);

  return (
    <div>
      <div>
        <div className="bg-black text-white flex justify-between h-14 items-center px-4">
          <Link to="/">
            <Logo />
          </Link>
          <button
            onClick={() => {
              dispatch(switchCard());
            }}
          >
            Click Me
          </button>
          <ul className="flex  space-x-4">
            <li></li>
            <Link to="/MainPage">
              <li>{t("Home")}</li>
            </Link>
            <Link to="/country">
              <li>{t("Countries")}</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
