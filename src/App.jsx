import { Route, Routes } from "react-router-dom";
import "./utils/style/base.scss";
import Home from "./pages/pagesHome/home.jsx";
import Template from "./components/template";
import Burger from "./pages/pageBurger/burgers.jsx";
import ClickCollect from "./pages/pageClickCollect";
import LaRecette from "./pages/pagesHome/Actus/laRecetteDesAnciens/laRecette";
import NotreGuacamole from "./pages/pagesHome/Actus/notreGuacamole/notreGuaca.jsx";
import LeResto from "./pages/pagesHome/pageLeResto/leResto.jsx";
import PourquoiCaPique from "./pages/pagesHome/Actus/pourquoiCaPique/caPique.jsx";
import LaSanChoStory from "./pages/pagesHome/pageSanChoStory/story.jsx";
import PageActus from "./pages/pagesHome/Actus/actus";
import Accompagnement from "./pages/pageAccompagnement";
import Boisson from "./pages/pageBoisson";
import Dessert from "./pages/pageDessert";
import RecapCommande from "./pages/pageRecapCommande";
import Paiement from "./pages/pagePaiement";
import LaCarte from "./pages/pageLaCarte/laCarte";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="/clickandcollect" element={<ClickCollect />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/accompagnement" element={<Accompagnement />} />
        <Route path="/boisson" element={<Boisson />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/recapitulatifCommande" element={<RecapCommande />} />
        <Route path="/paiement" element={<Paiement />} />
		<Route path="/laSanChoStory" element={<LaSanChoStory/>} />
		<Route path="/laRecetteDesAnciens" element={<LaRecette/>} />
		<Route path="/notreGuacamoleAuCactus" element={<NotreGuacamole/>} />
		<Route path="/PourquoiCestBonQuandCaPique" element={<PourquoiCaPique/>} />
		<Route path="/LeResto" element={<LeResto/>} />
		<Route path="/LaCarte" element={<LaCarte/>} />
		<Route path="/actus" element={<PageActus/>} >
			<Route path="/actus/laRecetteDesAnciens" element={<LaRecette/>} />
			<Route path="/actus/notreGuacamoleAuCactus" element={<NotreGuacamole/>} />
			<Route path="/actus/PourquoiCestBonQuandCaPique" element={<PourquoiCaPique/>} />
		</Route>
      </Route>
    </Routes>
  );
}

export default App;
