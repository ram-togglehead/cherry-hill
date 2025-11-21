import React, { useRef } from "react";
import "./slider.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";

const Slider = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const sliderData = [
    {
      name: "Our Team",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident, explicabo atque dolorem doloribus at fugiat ratione earum debitis distinctio?",
    },
    {
      name: "Our Team",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident, explicabo atque dolorem doloribus at fugiat ratione earum debitis distinctio?",
    },
    {
      name: "Our Team",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident, explicabo atque dolorem doloribus at fugiat ratione earum debitis distinctio?",
    },
    {
      name: "Our Team",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident, explicabo atque dolorem doloribus at fugiat ratione earum debitis distinctio?",
    },
    {
      name: "Our Team",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident, explicabo atque dolorem doloribus at fugiat ratione earum debitis distinctio?",
    },
    {
      name: "Our Team",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident, explicabo atque dolorem doloribus at fugiat ratione earum debitis distinctio?",
    },
    {
      name: "Our Team",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident, explicabo atque dolorem doloribus at fugiat ratione earum debitis distinctio?",
    },
  ];

  const sliderRef = useRef(null);

  useGSAP(() => {
    // Padding To Be Added

    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.firstElementChild;
    const cardWidth = card.offsetWidth;

    const paddingLeft = windowWidth - cardWidth;

    gsap.set(sliderRef.current, {
      paddingLeft,
    });

    const scrollValue = slider.scrollWidth - windowWidth;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#slider_sec-2",
          start: "top top",
          pin: true,
          scrub: 2,
          markers: true,
          pinSpacing: true,
          end: `+=${windowHeight * 7}`,
          anticipatePin: 1,
        },
      })
      .to(slider, {
        scrollLeft: scrollValue,
        ease: "power1.inOut",
      });
  });

  return (
    <>
      <section id="slider_sec-1"></section>
      <section id="slider_sec-2">
        <div className="my_container">
          <p className="slider_name">
            What Makes <br /> Us <span>Unique</span>?
          </p>
        </div>
        <div className="slider_wrapper">
          <div className="sliders" ref={sliderRef}>
            {sliderData?.map((data, i) => (
              <div className="slider">
                <div className="grayscale"></div>
                <div className="content">
                  <p className="name">Our Team</p>
                  <p className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente provident, explicabo atque dolorem doloribus at
                    fugiat ratione earum debitis distinctio?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="slider_sec-1"></section>
    </>
  );
};

export default Slider;
