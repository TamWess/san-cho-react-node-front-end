import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/pagesHome";
import Template from "./components/template";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/src/pages/pagesHome" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
