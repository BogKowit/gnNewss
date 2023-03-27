import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { NewsComponent } from "./components";
import { MainLayout } from "./layouts";

const ErrorPage = () => <div>Error 404</div>;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/" index element={<NewsComponent />} />
        <Route path="/country/:countryId" element={<NewsComponent />} />
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
