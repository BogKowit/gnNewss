import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { BlurLock, Logo } from "components/ui";
import { PopUpHeader, HeaderSwitcher, PopUpButtonOpen } from "components";

const Header = () => {
  const isSidebarOpen = useSelector(
    (state: RootState) => state.ui.isOpenPopUpAboutMe
  );

  return (
    <nav className="headerWrapper">
      <Logo />
      <PopUpButtonOpen />
      {isSidebarOpen && (
        <BlurLock>
          <PopUpHeader />
        </BlurLock>
      )}
      <HeaderSwitcher />
    </nav>
  );
};

export default Header;
