import React, { useEffect, useRef, useState } from "react";
import "./featuredproject.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";
import { Fp1, Fp2, Fp3 } from "@assets/index";

const FeaturedProject = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const featuredProjectRef = useRef(null);
  const [index, setIndex] = useState(0);

  const swipersInstance = useRef([]);

  const featuredProjectData = [
    {
      images: [
        Fp1,
        "https://images.unsplash.com/photo-1600508772927-723e3ba305c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfDB8fHww",
        "https://images.unsplash.com/photo-1706074793638-da28b90ea8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfDB8fHww",
      ],
    },
    {
      images: [
        Fp2,
        "https://images.unsplash.com/photo-1600508772927-723e3ba305c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfDB8fHww",
        "https://images.unsplash.com/photo-1706074793638-da28b90ea8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfDB8fHww",
      ],
    },
    {
      images: [
        Fp3,
        "https://images.unsplash.com/photo-1600508772927-723e3ba305c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfDB8fHww",
        "https://images.unsplash.com/photo-1706074793638-da28b90ea8ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfDB8fHww",
      ],
    },
  ];

  useGSAP(() => {
    // Padding To Be Added

    const featuredProject = featuredProjectRef.current;
    if (!featuredProject) return;

    gsap.set(".bg_image-2,.bg_image-3", {
      yPercent: 100,
    });

    gsap.set(".img_wrapper-inner-2,.img_wrapper-inner-3", {
      yPercent: 100,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: featuredProject,
          start: "top top",
          pin: true,
          scrub: 2,
          markers: true,
          pinSpacing: true,
          end: `+=${windowHeight * 5}`,
          anticipatePin: 1,
          // snap: 1 / 2,
        },
      })
      .to("#fp_sec-2 .cover", {
        scale: 8,
        duration: 3,
        ease: "power1.out",
        onComplete: () => {
          swipersInstance.current[0].autoplay.start();
        },
        onReverseComplete: () => {
          swipersInstance.current[0].autoplay.stop();
        },
      })
      .to(
        ".bg_image-2",
        {
          yPercent: 0,
          ease: "power1.inOut",
          duration: 1,
          onComplete: () => {
            setIndex(1);
            swipersInstance.current[0].autoplay.stop();
            swipersInstance.current[1].autoplay.start();
          },
          onReverseComplete: () => {
            setIndex(0);
            swipersInstance.current[0].autoplay.start();
            swipersInstance.current[1].autoplay.stop();
          },
        },
        "+=0.5"
      )
      .to(
        ".img_wrapper-inner-2",
        {
          yPercent: 0,
          ease: "power1.inOut",
          duration: 1,
        },
        "<"
      )
      .to(
        ".bg_image-3",
        {
          yPercent: 0,
          ease: "power1.inOut",
          duration: 1,
          onComplete: () => {
            setIndex(2);
            swipersInstance.current[1].autoplay.stop();
            swipersInstance.current[2].autoplay.start();
          },

          onReverseComplete: () => {
            setIndex(1);
            swipersInstance.current[1].autoplay.start();
            swipersInstance.current[2].autoplay.stop();
          },
        },
        "+=0.5"
      )
      .to(
        ".img_wrapper-inner-3",
        {
          yPercent: 0,
          ease: "power1.inOut",
          duration: 1,
        },
        "<"
      );
  });

  useEffect(() => {
    swipersInstance.current[0].autoplay.stop();
    swipersInstance.current[1].autoplay.stop();
    swipersInstance.current[2].autoplay.stop();
  }, []);

  return (
    <>
      <section id="fp_sec-1"></section>

      <section id="fp_sec-2" ref={featuredProjectRef}>
        <div className="cover"></div>

        <div className="bg_image">
          {featuredProjectData?.map((data, i) => (
            <Swiper
              onSwiper={(e) => {
                swipersInstance.current[i] = e;
              }}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Pagination, Autoplay]}
              className={`bg_image-slider bg_image-${i + 1}`}
            >
              {data.images?.map((link) => (
                <SwiperSlide className="">
                  <img
                    src={link}
                    alt=""
                    className="bg_image-inner"
                    width={1920}
                    height={1080}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ))}
        </div>

        <div className="my_container">
          <div className="left">
            <p className="name">
              Featured <br /> Projects
            </p>

            <p className="desc">
              Cherry Hill is your trusted partner in expansion, restructuring,
              shifting, or even setting up a new office. We then transform your
              abstract ideas into inspired workspaces
            </p>
          </div>

          <div className="right">
            <div className="img_wrapper">
              <img src={Fp1} className="img_wrapper-inner-1" alt="" />
              <img src={Fp2} className="img_wrapper-inner-2" alt="" />
              <img src={Fp3} className="img_wrapper-inner-3" alt="" />
            </div>

            <div className="content">
              <p className="name">Juniper - Gurgaon {index}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fp_sec-1"></section>
    </>
  );
};

export default FeaturedProject;
