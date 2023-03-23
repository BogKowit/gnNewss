import { Article, Header, PopUp } from "../components";
import { DataProvider } from "../components/context/ContextGetInformation";
import { UIProvider, UseUI } from "../components/context/ContextUI";
import { DisabledBody } from "../components/ui";

const HomePage = () => {
  return (
    <DataProvider>
      <UIProvider>
        <div>
          <Header />
          <Article />
        </div>
        <DisabledBody>
          <PopUp />
        </DisabledBody>
      </UIProvider>
    </DataProvider>
  );
};

export default HomePage;
