import React from "react";
import "./OfferPage.css";
import card1 from "../../img/Introduction/1st Cards option 4- Market research.png";
import card2 from "../../img/Introduction/3rd Cards - Business plan option 2.png";
import card3 from "../../img/Introduction/3rd Cards - Business plan.jpg";
import card4 from "../../img/Introduction/1st Cards option 2- Market research.png";

const OfferPage = () => {
  return (
    <div className="bg-secondary lg:h-screen">
      <div className="grid lg:grid-cols-2 gap-4 lg:px-20 px-5 py-10 text-base-100">
        <div className="flex items-center">
          <div>
            <h1 className="text-5xl font-bold">Nos offres</h1>
            <p className="font-light my-4">
              Nos offres sont toutes personnalisées et adaptées à vos projets.
              Avec Kibyon, obtenez le conseil dont vous avez besoin pour tous
              vos projets. Vous découvrirez ci-dessous nos offres de base que
              nous réalisons sur mesure. Nos experts sont à même de répondre à
              de nombreuses demandes : du diagnostic d’entreprise à
              l’accompagnement pour une stratégie de croissance externe en
              passant par du coaching et bien d’autres. N’hésitez pas à nous
              contacter pour voir de quelle façon nous pouvons vous aider
            </p>
          </div>
        </div>

        {/* =====================cards================================= */}
        <div className="grid lg:grid-rows-2  grid-rows-4 grid-flow-col gap-5 justify-center">
          <div className="relative rounded-lg cardBody">
            <h2 className="absolute top-5 left-8 z-10 cardText">Étude de marché </h2>
          <div class="flip-card ">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={card1} alt="Avatar" className="w-52 h-52 rounded-t-lg" />
              </div>
              <div class="flip-card-back rounded-t-lg bg-primary">
                <p className="text-xs mt-10 p-3">
                  Les institutions financières vous font payer le risque ? Nous,
                  nous le réduisons. Faites une étude de marché et réduisez le
                  risque inhérent à vos projets avec Kibyon.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-primary w-full h-9 relative rounded-b-lg">
            <p className="absolute left-8 top-1 cardText">A partir de  499€</p>
          </div>
          </div>

          {/* ==========================card2============ */}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={card2} alt="Avatar" className="w-52 h-52" />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>

          {/* ====================card3=========== */}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={card3} alt="Avatar" className="w-52 h-52" />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>

          {/* ===================card4================== */}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={card4} alt="Avatar" className="w-52 h-52" />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
