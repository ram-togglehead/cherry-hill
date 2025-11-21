import React, { useEffect, useRef, useState } from "react";
import "./card.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";
import { Card1, Card2, Card3, Fp1, Fp2, Fp3 } from "@assets/index";

const Card = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  useGSAP(() => {
    const getMovePosition = (currentEl, targetEl) => {
      const currentRect = currentEl.getBoundingClientRect();

      const targetRect = document
        .querySelector(targetEl)
        .getBoundingClientRect();

      return {
        top: targetRect.top - currentRect.top,
        left: targetRect.left - currentRect.left,
        width: targetRect.width,
        height: targetRect.height,
      };
    };

    const a = gsap.utils.toArray(".img_move");

    a.forEach((el) => {
      const { top, left, width, height } = getMovePosition(
        el,
        ".invisible_box"
      );
      gsap.set(el, {
        top,
        left,
        width,
        height,
      });
    });

    gsap.set(".text_holder", {
      yPercent: 200,
      opacity: 0,
    });

    gsap
      .timeline()
      .to(
        ".img_move",
        {
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          duration: 2.5,
          // ease: "elastic.out",
          // ease: "bounce.out",
          ease: "elastic.out(1,1)",
          // ease: "power2.out",
        },
        "+=1"
      )
      .to(
        ".text_holder",
        {
          yPercent: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
        },
        "<"
      );

    // GSDevTools.create();
  }, []);

  return (
    <>
      <section id="card_sec-1">
        <div className="invisible_box"></div>
        <div className="my_container">
          <div className="card_wrapper">
            <div className="top">
              <div className="img_wrapper top_corner">
                <img src={Card2} className="img_move" alt="" />
              </div>
              <div className="img_wrapper top_mid">
                <img src={Card1} className="img_move" alt="" />
              </div>
              <div className="img_wrapper top_mid">
                <img src={Card1} className="img_move " alt="" />
              </div>
              <div className="img_wrapper top_corner">
                <img src={Card2} className="img_move" alt="" />
              </div>
            </div>
            <div className="bottom">
              <div className="img_wrapper">
                <img src={Card3} className="img_move" alt="" />
              </div>
              <div className="text_holder">
                <p>
                  Creating Spaces <br />
                  That <span>Inspire</span>
                </p>
              </div>
              <div className="img_wrapper">
                <img src={Card3} className="img_move" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
