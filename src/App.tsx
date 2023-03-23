import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { UseSwitchProvider } from "./components/context/ContextSwitch";
import HomePage from "./pages/HomePage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<HomePage />} />)
  );

  return (
    <UseSwitchProvider>
      <RouterProvider router={route}/>
    </UseSwitchProvider>
  );
}

export default App;