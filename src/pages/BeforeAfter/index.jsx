import React, { useEffect, useRef, useState } from "react";
import "./beforeafter.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";
import { Fp1, Fp2, Fp3 } from "@assets/index";

const BeforeAfter = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const featuredProjectRef = useRef(null);
  const [index, setIndex] = useState(0);

  const [range, setRange] = useState(50);

  // gsap.set(".img-2", { width: "50%" });

  useGSAP(() => {
    gsap.set(".img-2", {
      width: `${100 - range}%`,
      ease: "power3.inOut",
      duration: 0.3,
    });
  }, [range]);

  return (
    <>
      <section id="ba_sec-1">
        <div className="my_container">
          <div className="ba_slider">
            <input
              className="input_range"
              type="range"
              min={0}
              max={100}
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />

            <div className="img_wrapper">
              <div className="img-1"></div>
              <div className="img-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BeforeAfter;
