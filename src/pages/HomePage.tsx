import { Article, PopUp } from "../components";
import { DataProvider } from "../components/context/ContextGetInformation";
import { DisabledBody } from "../components/ui";

const HomePage = () => {
  return (
    <>
      <DataProvider>
        <Article />
        <DisabledBody>
          <PopUp />
        </DisabledBody>
      </DataProvider>
    </>
  );
};

export default HomePage;
