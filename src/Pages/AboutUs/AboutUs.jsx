import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useState, useEffect, useRef } from "react";
import welcome from "../../Videos/WP - Section 3 -Services 5 étoiles VF-03_2023.blend0001-0400.mp4";
import "./AboutUs.css"


const AboutUs = (props) => {
  // ========================
  // const divRef = useRef(null);
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseHover = (e) => {
  //   const div = divRef.current;
  //   const rect = div.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;
  //   const radius = Math.sqrt(rect.width ** 2 + rect.height ** 2) / 8;

  //   setIsHovered(true);
  //   div.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, transparent ${radius}px, black ${radius}px)`;
  //   radius.style.backgroundColor = "red";
  // };

  // const handleMouseLeave = () => {
  //   const div = divRef.current;

  //   setIsHovered(false);
  //   div.style.backgroundImage = "";
  //   div.style.mixBlendMode = "";
  // };
 

  return (
    <div className=" text-center h-auto relative">
       
      
      
   

     
      {/* ================ */}
      {/* <div
      ref={divRef}
      onMouseMove={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      className="h-screen "
      style={{
        backgroundColor: isHovered ? "transparent" : "#000",
        color: isHovered ? "#000" : "#fff",
        transition: "background-color 0.3s ease, color 0.3s ease",
        cursor:"none"
      }}
    >
    <div className="relative title rowInverse grid lg:grid-rows-2 gap-8 text-justify  ">
          <div className="grid  lg:grid-cols-2 gap-5" 
         >
            <p className="p-5 inverseCol"  
            data-aos="fade-up"
          >
              Ce qui nous anime et ce qui fait l’ADN de ce cabinet, c’est
              d’accompagner les chefs d’entreprises et de prendre toute notre
              part dans les défis actuels que rencontrent nos entreprises et
              sociétés en perpétuelle mutation dans une économie globalisée.
            </p>
            <p className="p-5"  data-aos="fade-up"
         data-aos-duration="3000">
              Les créateurs et dirigeants d’entreprises sont souvent bien trop
              isolés. Nous souhaitons être un appui et un partenaire de
              confiance qui sait rester flexible et s’adapter à chaque besoin
              pour vous accompagner du mieux possible. Pour ce faire nous
              mettons à votre service nos compétences, que nous maintenons à
              haut niveau grâce à une capitalisation sur les expériences passées
              et une forte appétence pour la recherche académique.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            <p className="p-5"  data-aos="fade-up"
         >
              L’objectif est de donner un autre regard aux dirigeants, en nous
              basant sur des faits et une connaissance accrue de votre
              structure, votre environnement, de votre quotidien, en fonction
              des objectifs et besoins énoncés et décelés. Nous souhaitons vous
              épauler pour qu’ensemble nous puissions prendre les meilleures
              décisions et optimiser votre (future) entreprise pour la rendre la
              plus efficiente possible en fonction des objectifs fixés et de la
              stratégie définis.
            </p>
            <p className="p-5"  data-aos="fade-up"
           data-aos-duration="3000">
              Nous saurons à la fois vous guider pour performer et affronter le
              quotidien qui est le vôtre. Mais également innover, être
              imaginatifs pour trouver des solutions en tenant compte des
              contraintes. Nous sommes transparents et n’hésiterons pas à
              communiquer clairement, à vous challenger avec bienveillance et à
              vous proposer des solutions avant-gardistes et adaptées aux défis
              actuels et futurs
            </p>
          </div>
        
        </div>
    </div> */}
    </div>
  );
};

export default AboutUs;
