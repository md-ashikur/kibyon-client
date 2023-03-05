import React, { useEffect, useRef } from "react";
import sec5tree from "../../img/Offre unique/Offre unique without background.png";
import sec5Bg from "../../img/Offre unique/Offre unique without object.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OfferSecFive = () => {
  const parallaxRefFive = useRef(null);

  useEffect(() => {
    const parallaxElement = parallaxRefFive.current;

    const imgElement = parallaxElement.querySelector("img");

    gsap.to(imgElement, {
      yPercent: -10,
      scale: 1.7,
      ease: "none",
      scrollTrigger: {
        trigger: parallaxElement,
        start: "top center",
        end: "bottom center",

        scrub: true,
      },
    });
  }, []);

  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="absolute lg:top-10 top-5 z-10 lg:px-20 px-3 text-base-100 py-10">
          <div className="flex justify-center flex-col items-center">
            <h2 className="lg:text-5xl text-xl  font-bold text-secondary">
              Qu’est-ce que l’offre unique ?
            </h2>
            <p className="text-base-100 border-2 border-secondary lg:mt-[100%] mt-40 lg:mx-36 lg:text-2xl text-sm p-3 text-justify">
              Exprimez-nous vos difficultés, vos besoins et nous trouverons la
              meilleure façon de vous aider. A travers cette offre nous voulons
              apporter de la flexibilité et ainsi être au plus près de vos
              préoccupations et des problématiques que vous rencontrez. Pour
              autant, si cela sort de notre champ de compétence nous vous en
              ferons part et tenterons de vous orienter vers les experts les
              plus adaptés.
            </p>
          </div>
        </div>

        <div ref={parallaxRefFive}>
          <img src={sec5tree} alt="" className="w-full absolute" />
          <img src={sec5Bg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default OfferSecFive;
