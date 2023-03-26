import { NewsComponent, PopUp } from "../components";
import { DisabledBody } from "../components/ui";

const HomePage = () => {
  return (
    <>
      <NewsComponent />
      <DisabledBody>
        <PopUp />
      </DisabledBody>
    </>
  );
};

export default HomePage;
