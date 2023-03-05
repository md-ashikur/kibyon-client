import { useEffect, useRef } from "react";
import React from "react";
import imgSrc from "../../img/Business plan/BP - Block 1 & 2 (original).png";
import block3 from "../../img/Business plan/BP - Block 3 (original).png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OfferSecTwo = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;

    const imgElement = parallaxElement.querySelector("img");

    gsap.to(imgElement, {
      yPercent: -10,
      scale: 1.7,
      ease: "none",
      scrollTrigger: {
        trigger: parallaxElement,
        start: "top center",
        end: "bottom center",
        markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className=" overflow-hidden">
      <div className="relative">
        <div className="absolute top-10 z-10 grid grid-cols-2 gap-5 lg:px-20 px-3 text-base-100 py-20">
          <div>
            <h2 className="text-2xl font-semibold text-secondary">
              Qu’est-ce qu’un Business plan ?
            </h2>
            <p className="text-base-100 border-2 border-secondary drop-shadow-lg lg:mt-[185%] p-3 mr-20 text-justify">
              Contrairement aux idées reçues, on ne fait pas un business plan
              uniquement dans le cadre d’une création d’entreprise mais
              également pour tout projet nouveau au sein de cette dernière. Un
              business plan adapté est de mise pour traduire les projections de
              développement et démontrer la cohérence de votre stratégie à 360°
              (R.H, finance, marketing…) quant aux objectifs et à la rentabilité
              du projet. Il s’agit à la fois d’apporter de la clarté dans votre
              projet, savoir précisément dans quelle direction vous allez et de
              quelle façon.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary text-right">
              Pourquoi faire un Business plan ?
            </h2>

            <div className="border-2 border-secondary p-3 lg:mt-[176%] ">
              <p className="text-justify">
                Réaliser un business plan est avant tout primordial pour vous
                permettre de valider la viabilité de votre projet et de vous
                aider à le structurer en adoptant la meilleure stratégie. C’est
                également un puissant outil incontournable pour convaincre vos
                partenaires et financeurs de la pertinence de votre projet sur
                tous les plans. Il ne faut donc pas prendre sa rédaction à la
                légère et savoir mettre en avant les atouts du projet tout en
                montrant que vous avez pris en compte les différents risques
                possibles et que vous y êtes préparé.
              </p>
              <p className="text-justify">
                Nous vous proposons un business plan sur mesure adapté à votre
                usage et qui correspondra aux attentes de vos partenaires
                (banques, investisseurs, fournisseurs etc.). De par notre
                expertise et notre savoir-faire, nous saurons réaliser le
                business plan qui répond à vos besoins.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute left-40 top-40 border-l border-secondary bg-red-500 h-[1080px] z-10"></div>
        <div className="absolute right-40 top-40 border-l border-secondary bg-red-500 h-[1025px] z-10"></div>

        <div ref={parallaxRef}>
          <img src={imgSrc} alt="" className="w-full" />
        </div>
      </div>

      {/* ======================================================= */}
      <div className="relative">
      <div className=" grid grid-cols-2 gap-5 px-3 text-base-100 my-20 pb-16">
        <div className="absolute top-52 right-10 lg:mx-20">
          <h2 className="text-2xl font-semibold text-secondary mt-5">
            Comment cela va-t-il se dérouler ?
          </h2>
          <div className="border border-secondary p-3 text-justify text-base-100 mt-[80%]">
            <ul class="marker:text-base-100 list-disc pl-5 space-y-3 text-base-100">
              <li>1 échange téléphonique pour bien comprendre votre projet</li>
              <li>
                Collecte des éléments disponibles du projet et collaboration
                pour obtenir les éléments manquants.
              </li>
              <li>1 proposition commerciale adaptée à votre besoin</li>
              <li>
                Entretiens de travail de plusieurs heures pour structurer le
                projet et définir les lignes directrices.
              </li>
              <li>
                Plusieurs échanges complémentaires au fil de la mission pour
                préciser le projet et réfléchir ensemble aux meilleurs choix
                pour vous.
              </li>
              <li>
                Livrable du business plan en pdf et Powerpoint avec accès au
                fichier source, contenant entre autres : présentation du projet
                et des fondateurs, étude de marché, prévisionnel financier,
                explication de la stratégie etc.
              </li>
              <li>
                Présentation du business plan et prise en main avec le client
                pour pouvoir être totalement indépendant et autonome.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute left-40 top-64 border-l border-secondary bg-red-500 h-[927px] z-10"></div>
    
      <div>
        <img src={block3} alt="" className="w-full" />
      </div>
      </div>
    </div>
  );
};

export default OfferSecTwo;
