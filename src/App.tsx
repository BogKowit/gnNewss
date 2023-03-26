import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { NewsComponent } from "./components";
import MainLayout from "./layouts/MainLayout";
import { InfoByCountries, HomePage } from "./pages";

const ErrorPage = () => {
  return <div>Error 404</div>;
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/MainPage" index element={<HomePage />} />
        <Route path="/country" element={<InfoByCountries />} />
        <Route
          path="/country/:countryId"
          element={<NewsComponent  />}
        />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
