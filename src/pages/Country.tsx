import { useLocation } from "react-router-dom";
import { Article } from "../components";
import { DataProvider } from "../components/context/ContextGetInformation";

const Country = () => {
  let { state } = useLocation();



  return (
    <div>
      <DataProvider country={state}>
        <Article />
      </DataProvider>
    </div>
  );
};

export default Country;
