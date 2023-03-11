import { Route, Routes } from "react-router-dom";
import "./utils/style/base.scss";
import Home from "./pages/pagesHome/index.jsx";
import Template from "./components/template";
import Burger from "./pages/pageBurger";
import ClickCollect from "./pages/pageClickCollect";
import LaRecette from "./pages/pagesHome/Actus/laRecetteDesAnciens";
import NotreGuacamole from "./pages/pagesHome/Actus/notreGuacamole";
import LeResto from "./pages/pagesHome/pageLeResto";
import PourquoiCaPique from "./pages/pagesHome/Actus/pourquoiCaPique";
import LaSanChoStory from "./pages/pagesHome/pageSanChoStory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/clickandcollect" element={<ClickCollect />} />
		<Route path="/laRecetteDesAnciens" element={<LaRecette/>} />
		<Route path="/notreGuacamoleAuCactus" element={<NotreGuacamole/>} />
		<Route path="/PourquoiCestBonQuandCaPique" element={<PourquoiCaPique/>} />
		<Route path="/laSanChoStory" element={<LaSanChoStory/>} />
		<Route path="/LeResto" element={<LeResto/>} />
      </Route>
    </Routes>
  );
}

export default App;
