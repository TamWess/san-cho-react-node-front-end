import { Route, Routes } from "react-router-dom";
import "./utils/style/base.scss";
import Home from "./pages/pagesHome/index.jsx";
import Template from "./components/template";
import Burger from "./pages/pageBurger";
import ClickCollect from "./pages/pageClickCollect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/clickandcollect" element={<ClickCollect />} />

      </Route>
    </Routes>
  );
}

export default App;
