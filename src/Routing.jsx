import { Navigate, Route, Routes } from "react-router-dom";
import { homeURL } from "./helpers/path";
import Home from "./pages/Home/Home";
import Slider from "@pages/Slider";
import FeaturedProject from "@pages/FeaturedProject";

const Routing = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path={homeURL} element={<Home />} />
          <Route path={"/slider"} element={<Slider />} />
          <Route path={"/featured-project"} element={<FeaturedProject />} />
        </Routes>
      </main>
    </>
  );
};

export default Routing;
