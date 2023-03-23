import { Article } from "./components";
import { fetchDataNews } from "./utils/fetchDataNews";

function App() {
  console.log(fetchDataNews())
  return (
    <div >
      <Article/>
    </div>
  );
}

export default App;
