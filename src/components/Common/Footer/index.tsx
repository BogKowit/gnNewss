import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Timer } from "components";

const Footer = () => {
  const information = useSelector((state: RootState) => state.news.data);

  return (
    <div className="footerWrapper">
      <p>
        Liczba artukułów na stronie: {information ? information?.length : 0}
      </p>
      <Timer />
    </div>
  );
};

export default Footer;
