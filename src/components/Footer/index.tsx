import Timer from "./Timer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Footer = () => {
  const information = useSelector((state: RootState) => state.news.data);

  return (
    <div className="w-full bg-black h-12 text-white flex  items-center justify-between px-4 space-x-2">
      <p>Liczba artukułów na stronie: {information.length}</p>
      <Timer />
    </div>
  );
};

export default Footer;
