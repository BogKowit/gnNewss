import { Outlet } from "react-router-dom";
import { Header } from "../components";

const MainLayout = () => {
  console.log(Outlet)
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
