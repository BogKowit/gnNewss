import { Outlet } from "react-router-dom";
import { Footer, Header, Sidebar } from "../../components";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen ">
      <div>
        <Header />
        <div className=" grid grid-cols-12  w-full h-[calc(100vh-104px)]">
          <div className="col-span-4 p-2 lg:col-span-3 xl:col-span-2 overflow-y-auto border-r-2 border-gray-400">
            <Sidebar />
          </div>
          <div className="col-span-8 lg:col-span-9 xl:col-span-10 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
