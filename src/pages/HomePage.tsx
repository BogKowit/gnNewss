import { Article, Header, PopUp } from "../components";
import { DataProvider } from "../components/context/ContextGetInformation";
import { UIProvider, UseUI } from "../components/context/ContextUI";
import Countries from "../components/Countries";
import { DisabledBody } from "../components/ui";

const HomePage = () => {
  return (
    <DataProvider>
      <Countries/>
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
