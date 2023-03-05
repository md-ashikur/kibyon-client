import React from "react";
import marketStudy from "../../Videos/Market study.mp4";

const OfferSecThree = () => {
  return (
    <div>
      <section className="relative lg:py-20 lg:h-[600px] overflow-hidden">
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
    </div>
  );
};

export default OfferSecThree;
