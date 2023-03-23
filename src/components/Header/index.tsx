import { Link } from "react-router-dom";
import { useSwitch } from "../context/ContextSwitch";
import Logo from "./Logo";

const Header = () => {
  const { switchCard } = useSwitch();
  return (
    <div>
      <div>
        <div className="bg-black text-white flex justify-between h-14">
          <Link to="/">
            <Logo />
          </Link>
          <button onClick={switchCard}>Click Me</button>
          <div className="flex space-x-4">
            <div>Menu</div>
            <div>Szukaj</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
