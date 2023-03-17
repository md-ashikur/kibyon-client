import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import kibyonText from "../../../img/Welcome page/kt.png";
import kibyonBg from "../../../img/Welcome page/Untitled-1.jpg";

import "./WSecTwo.css";

const WSecTwo = () => {
  return (
    <div className=" relative">
      <div className="bg-primary h-52 text-center flex justify-center ">
     
        <h1 className="lg:w-[70%] pt-28 px-5 lg:text-4xl text-secondary font-semibold ">
          Et si nous mettions nos compétences au service du plus grand
          nombre ?
        </h1>
      
      </div>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: kibyonBg, speed: -20 }]}
          className="aspect-[2.2/1]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={kibyonText} alt="" />
          </div>
        </ParallaxBanner>
      </ParallaxProvider>


      <div className="bg-primary px-20 pb-20 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-4 gap-8 text-justify  text-base-100">
          <p>
            Ce qui nous anime et ce qui fait l’ADN de ce cabinet, c’est
            d’accompagner les chefs d’entreprises et de prendre toute notre part
            dans les défis actuels que rencontrent nos entreprises et sociétés
            en perpétuelle mutation dans une économie globalisée.
          </p>

          <p>
            Les créateurs et dirigeants d’entreprises sont souvent bien trop
            isolés. Nous souhaitons être un appui et un partenaire de confiance
            qui sait rester flexible et s’adapter à chaque besoin pour vous
            accompagner du mieux possible. Pour ce faire nous mettons à votre
            service nos compétences, que nous maintenons à haut niveau grâce à
            une capitalisation sur les expériences passées et une forte
            appétence pour la recherche académique.{" "}
          </p>
          <p>
            L’objectif est de donner un autre regard aux dirigeants, en nous
            basant sur des faits et une connaissance accrue de votre structure,
            votre environnement, de votre quotidien, en fonction des objectifs
            et besoins énoncés et décelés. Nous souhaitons vous épauler pour
            qu’ensemble nous puissions prendre les meilleures décisions et
            optimiser votre (future) entreprise pour la rendre la plus
            efficiente possible en fonction des objectifs fixés et de la
            stratégie définis.{" "}
          </p>
          <p>
            Nous saurons à la fois vous guider pour performer et affronter le
            quotidien qui est le vôtre. Mais également innover, être imaginatifs
            pour trouver des solutions en tenant compte des contraintes. Nous
            sommes transparents et n’hésiterons pas à communiquer clairement, à
            vous challenger avec bienveillance et à vous proposer des solutions
            avant-gardistes et adaptées aux défis actuels et futurs
          </p>
        </div>
      </div>
    </div>
  );
};

export default WSecTwo;