import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="./">
    <div className="logoWrapper">
      <p className="logoElement">N</p>
      <p className="logoElement">G</p>
      <p className="logoElement">News</p>
    </div>
  </Link>
);

export default Logo;
