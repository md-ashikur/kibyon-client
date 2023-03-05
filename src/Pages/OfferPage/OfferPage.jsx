import React, { useEffect, useRef } from "react";
import "./OfferPage.css";
import card1 from "../../img/Introduction/1st Cards option 4- Market research.png";
import card2 from "../../img/Introduction/Cards N°2= Prévi.png";
import card3 from "../../img/Introduction/3rd Cards - Business plan option 2.png";
import card4 from "../../img/Introduction/1st Cards option 2- Market research.png";
import { Link } from "react-router-dom";
import marketStudy from "../../Videos/Market study.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OfferSecTwo from "./OfferSecTwo";

gsap.registerPlugin(ScrollTrigger);

const OfferPage = () => {
  return (
    <div className="bg-secondary lg:h-auto">
      {/* ****************************Section-1**********Nos offres section START************************* */}

      <section className=" grid lg:grid-cols-2 gap-3 lg:px-20 px-5 py-10 text-base-100">
        <div className="flex items-center">
          <div>
            <h1 className="text-5xl font-bold">Nos offres</h1>
            <p className="font-light my-4 text-justify z-50">
              Nos offres sont toutes personnalisées et adaptées à vos projets.
              Avec Kibyon, obtenez le conseil dont vous avez besoin pour tous
              vos projets. Vous découvrirez ci-dessous nos offres de base que
              nous réalisons sur mesure. Nos experts sont à même de répondre à
              de nombreuses demandes : du diagnostic d’entreprise à
              l’accompagnement pour une stratégie de croissance externe en
              passant par du coaching et bien d’autres. N’hésitez pas à nous
              contacter pour voir de quelle façon nous pouvons vous aider
            </p>
            <div className="flex items-center justify-center mt-12">
              <Link to="/contact">
                <button className="border px-3 py-2 rounded-lg hover:bg-primary hover:scale-105 duration-150">
                  Contactez-nous
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================cards================================= */}

        <div className="grid lg:grid-rows-2  grid-rows-4 grid-flow-col gap-5 justify-center">
          {/* ================card1======================== */}
          <div className="relative cardBody">
            <h2 className="absolute top-5 left-10 z-10 cardText">
              Étude de marché
            </h2>
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={card1}
                    alt="Avatar"
                    className="w-[220px] h-[220px] rounded-t-lg"
                  />
                </div>
                <div class="flip-card-back rounded-t-lg bg-primary">
                  <p className="text-xs mt-10 p-3 text-justify">
                    Les institutions financières vous font payer le risque ?
                    Nous, nous le réduisons. Faites une étude de marché et
                    réduisez le risque inhérent à vos projets avec Kibyon.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary w-full h-9 relative rounded-b-lg">
              <p className="absolute left-11 top-1 cardText">
                A partir de 499€
              </p>
            </div>
          </div>

          {/* ====================card3=========== */}
          <div className="relative cardBody">
            <h2 className="absolute top-5 left-14 z-10 cardText">
              Business plan
            </h2>
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={card3}
                    alt="Avatar"
                    className="w-[220px] h-[220px] rounded-t-lg"
                  />
                </div>
                <div class="flip-card-back rounded-t-lg bg-primary">
                  <p className="text-xs mt-10 p-3 text-justify">
                    Et si nous faisions un tour d’horizon à 360° de votre projet
                    ? Nous réaliserons un business plan sur mesure incluant
                    étude de marché et prévisionnel financier, en vous
                    accompagnant sur les différentes stratégies possibles.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary w-full h-9 relative rounded-b-lg">
              <p className="absolute left-11 top-1 cardText">
                A partir de 999€
              </p>
            </div>
          </div>

          {/* ==========================card2============ */}
          <div className="relative cardBody">
            <h2 className="absolute top-5 left-7 z-10 cardText">
              Prévisionel financier
            </h2>
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={card2}
                    alt="Avatar"
                    className="w-[220px] h-[220px] rounded-t-lg"
                  />
                </div>
                <div class="flip-card-back rounded-t-lg bg-primary">
                  <p className="text-xs mt-10 p-3 text-justify">
                    Réaliser un prévisionnel financier vous parait impossible ?
                    superflu ? ou une simple requête sans intérêt de différents
                    tiers ? faites-nous confiance, dans le feu de l’action vous
                    apprécierez avoir un guide sur lequel vous appuyer .Alors
                    préparons votre feuille de route ensemble !
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary w-full h-9 relative rounded-b-lg">
              <p className="absolute left-11 top-1 cardText">
                A partir de 599€
              </p>
            </div>
          </div>
          {/* ===================card4================== */}
          <div className="relative cardBody">
            <h2 className="absolute top-5 left-14 z-10 cardText">
              Offre unique
            </h2>
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={card4}
                    alt="Avatar"
                    className="w-[220px] h-[220px] rounded-t-lg"
                  />
                </div>
                <div class="flip-card-back rounded-t-lg bg-primary">
                  <p className="text-xs mt-10 p-3 text-justify">
                    Vous avez besoin d’aide ou souhaitez nous soumettre un
                    projet ? nous pouvons intervenir sur la stratégie et
                    l’organisation d’une entreprise de l’idée à la cession,
                    réaliser du coaching, résoudre des problèmes précis, épauler
                    ponctuellement le dirigeant en fonction de ses besoins etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary w-full h-9 relative rounded-b-lg">
              <p className="absolute left-12 top-1 cardText">Sur demande</p>
            </div>
          </div>
        </div>
      </section>

      {/* ***************************Section-1********Nos offres section END************************* */}

      {/* **************************
      Section-2*********
      Market research START
      *********************** */}

      <section className="relative mt-10 h-[600px] overflow-hidden">
        {/* ========================1st part=================== */}
        <div className="">
          <video autoplay muted loop id="myVideo" className="w-full">
            <source src={marketStudy} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>

        <div className="content py-16 ">
          <div className="my-10 lg:px-20">
            <h1 className="text-5xl text-center font-bold text-base-100">
              Pourquoi faire une étude de marché ?
            </h1>
            <div className="my-10 text-justify text-base-100">
              <p className="my-5 ">
                L’étude de marché va vous permettre d’éliminer ou de réduire les
                zones d’incertitudes qui subsistent dans vos différents projets.
                En vous apportant un regard sur les attentes de vos
                consommateurs et une visibilité sur les acteurs déjà en place
                sur le marché concerné.
              </p>
              <p className="my-5">
                Cela vous permettra de cerner les opportunités de marché :
                est-ce que je me lance sur ce marché ? si oui dans quelles
                conditions ?
              </p>
              <p className="my-5">
                Vous serez également en mesure d’identifier les risques et
                chances de succès. L’étude de marché va vous permettre de mieux
                connaitre l’environnement dans lequel vous évoluez, de vous
                rassurer sur l’orientation à prendre pour maximiser les chances
                de succès et de rassurer également l’ensemble des parties
                prenantes (associés, financeurs, organismes tiers…)
              </p>
              <p className="my-5">
                Une étude de marché sera votre base de réflexion pour bâtir une
                stratégie adaptée et définir des objectifs réalistes. Nous
                pourrons ensuite réaliser un prévisionnel financier sur mesure
                et un plan d’actions personnalisé.
              </p>
            </div>
          </div>

          {/* =====================2nd part=========================== */}

          <div className="my-20 lg:px-20">
            <h1 className="text-5xl text-center font-bold text-base-100">
              Et si nous prenions de la hauteur ensemble ?
            </h1>
            <div className="my-10 text-justify text-base-100">
              <p className="my-5">
                Que ce soit un projet pour une entreprise établie ou en
                création, l’étude de marché vous permettra de prendre du recul
                et de la hauteur sur votre projet afin de vous permettre de vous
                projeter et de prendre les meilleures décisions pour l’avenir.
                Kibyon vous évitera de tomber dans des biais de confirmation et
                vous apportera d’autres points de vue et axes de réflexions afin
                d’ouvrir le champ des possibles.
              </p>
            </div>
          </div>

          {/* =======================3rd part================================== */}

          <div className="lg:px-20">
            <h1 className="text-3xl font-bold text-base-100">
              Comment cela va-t-il se dérouler ?
            </h1>
            <div className="my-10 text-justify text-base-100">
              <ul class="marker:text-base-100 list-disc pl-5 space-y-3 text-base-100">
                <li>Nous recevons votre mail ou votre appel</li>
                <li>
                  1 échange téléphonique pour bien comprendre votre projet
                </li>
                <li>Collecte des éléments disponible du projet</li>
                <li>1 proposition commerciale adaptée à votre besoin</li>
                <li>
                  Plusieurs échanges complémentaires pour préciser le projet si
                  besoin
                </li>
                <li>
                  Livrable de l’étude de marché en pdf et Powerpoint avec accès
                  au fichier source.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* **************************Section-2*********Market research END*********************** */}

      {/* **************************
      Section-3
      *********
      Financial forecast START
      *********************** */}

      <section className="relative py-20 h-[600px] overflow-hidden">
        {/* ========================1st part=================== */}
        <div className="">
          <video autoplay muted loop id="myVideo" className="w-full">
            <source src={marketStudy} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>

        <div className="content py-16 ">
          <div className="my-10 lg:px-20">
            <h1 className="text-5xl text-center font-bold text-base-100">
              Qu’est-ce qu’un prévisionnel financier ?
            </h1>
            <div className="my-10 text-justify text-base-100">
              <p className="my-5 ">
                Il est d’usage de dire que le prévisionnel financier est la
                partie financière du business plan. C’est la modélisation
                chiffrée de votre stratégie à 3-5ans. En simplifiant, le
                prévisionnel financier, sera votre boussole qui révèlera les
                impacts financiers à court, moyen et long terme des actions que
                vous entreprendrez pour bâtir votre projet au fil du temps.
              </p>
            </div>
          </div>

          {/* =====================2nd part=========================== */}

          <div className="my-20 lg:px-20">
            <h1 className="text-5xl text-center font-bold text-base-100">
              Pourquoi ne faire qu’un prévisionnel financier ?
            </h1>
            <div className="my-10 text-justify text-base-100">
              <p className="my-5">
                Tout d’abord, il est évident qu’il faut déjà le faire pour vous.
                Nous devons étudier votre projet d’un point de vue financier
                pour valider le business model (connaitre sa rentabilité) et
                pouvoir évaluer les perspectives financières et le risque qui en
                découle. Il vous permettra de connaitre les ressources
                financières nécessaires pour mener à bien ce projet.
              </p>
              <p className="my-5">
                Vous pourrez ensuite vous en servir pour établir vos objectifs
                et garder cet outil de référence tout on long de votre parcours
                entrepreneurial. Croyez-nous, vous apprécierez pouvoir vous y
                rattacher dans les moments mouvementés.
              </p>
              <p className="my-5">
                Enfin, il a un intérêt certain pour les parties externes afin de
                les aider à appréhender votre projet dans son ensemble, de les
                convaincre de l’opportunité financière et donc attirer de
                potentiels investisseurs. Il est toujours difficile de se
                projeter et de réaliser un prévisionnel, on peut vite se sentir
                perdu. Avec Kibyon, vous aurez un outil sur mesure clef en main
                vous permettant de réaliser des simulations, des scénarios pour
                ainsi trouver le bon équilibre et une alchimie parfaite entres
                les divers flux qui constituent un prévisionnel financier et les
                contraintes qui s’imposent à vous.
              </p>
            </div>
          </div>

          {/* =======================3rd part================================== */}

          <div className="lg:px-20">
            <h1 className="text-3xl font-bold text-base-100">
              Comment cela va -t-il se dérouler ?
            </h1>
            <div className="my-10 text-justify text-base-100">
              <ul class="marker:text-base-100 list-disc pl-5 space-y-3 text-base-100">
                <li>
                  1 échange téléphonique pour bien comprendre votre projet
                </li>
                <li>Collecte des éléments disponible du projet</li>
                <li>1 proposition commerciale adaptée à votre besoin</li>
                <li>1 entretien de travail pour bien définir le projet </li>
                <li>
                  Plusieurs échanges complémentaires pour préciser le projet si
                  besoin
                </li>
                <li>
                  Livrable du prévisionnel financier en pdf et excel avec accès
                  au fichier source
                </li>
                <li>
                  Explications du fichier de simulation et prise en main avec le
                  client pour pouvoir être totalement indépendant et autonome.
                </li>
              </ul>
            </div>
          </div>

          {/* =====================4th part=========================== */}

          <div className="my-20 lg:px-20">
            <h1 className="text-5xl text-center font-bold text-base-100">
              Avec Kibyon, gardez un œil sur l’avenir !
            </h1>
            <div className="my-10 text-justify text-base-100">
              <p className="my-5">
                Il n’est pas toujours aisé de se projeter et de simuler le
                chiffre d’affaires, les dépenses, les investissements etc que
                vous aurez à 3 - 5ans. Nous vous proposons des scénarios adaptés
                et réalistes, basés sur des indicateurs pertinents. L’idée est
                de vous rendre autonome en vous expliquant les tenants et
                aboutissants de l’outil que nous développons pour vous. Ainsi,
                vous serez en mesure de tirer le maximum de bénéfice du
                prévisionnel financier que nous mettrons à votre disposition et
                pour lequel vous pourrez réaliser de nouveaux scenarios à cours
                moyen et long terme. Nous tenons à faire preuve de pédagogie
                pour vous permettre également d’expliquer les scenarios à de
                potentiels investisseurs ou établissements financier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------Section-3------Financial forecast END---------------------- */}



      {/* **************************
      Section-4
      *********
      Business plan  START
      *********************** */}
      <section>
<OfferSecTwo/>
      </section>
      {/* **************************Section-4*********Business plan  END*********************** */}

      <section className="">
        
      </section>
    </div>
  );
};

export default OfferPage;
