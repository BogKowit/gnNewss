import React from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import App from "./App";
import { UseSwitchProvider } from "./components/context/ContextSwitch";
import { UIProvider } from "./components/context/ContextUI";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./redux/RootState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UseSwitchProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </UseSwitchProvider>
    </Provider>
  </React.StrictMode>
);
