import { BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return(
    // <BrowserRouter>
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path={"/AnotherSite"} element={<AnotherSite />}></Route> */}
        </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
