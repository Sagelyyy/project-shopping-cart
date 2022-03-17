import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Store from "./components/Store";
import Home from "./components/Home";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<Store />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);