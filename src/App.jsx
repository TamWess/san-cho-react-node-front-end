import { Route, Routes } from "react-router-dom";
import Home from "./pages/pagesHome/index.jsx";
import Template from "./components/template";
import Burger from "./pages/pageBurger";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="/burger" element={<Burger />} />
      </Route>
    </Routes>
  );
}

export default App;
