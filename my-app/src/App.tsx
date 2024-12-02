import AboutUs from "./pages/AboutUs";
import Main from "./pages/Main";
import OurService from "./pages/OurService";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/service" element={<OurService />}></Route>
        <Route path="/page"></Route>
        <Route path="/blog"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
