import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSwitch } from "../context/ContextSwitch";
import Logo from "./Logo";

const Header = () => {
  const { switchCard } = useSwitch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);



  return (
    <div>
      <div>
        <div className="bg-black text-white flex justify-between h-14 items-center px-4">
          <Link to="/">
            <Logo />
          </Link>
          {/* <button onClick={switchCard}>Click Me</button> */}
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
