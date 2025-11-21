import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import "./assets/scss/common.scss";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// GSAP

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, GSDevTools, ScrollTrigger, ScrollToPlugin);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
