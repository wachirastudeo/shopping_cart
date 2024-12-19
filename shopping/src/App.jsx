import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
