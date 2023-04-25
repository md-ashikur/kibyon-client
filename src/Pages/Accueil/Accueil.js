import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import "./Accueil.css";
import welcomeBg from "../../img/intro welcome page background.png";
import WSecTwo from "./WelcomeSecTwo/WSecTwo";
import WSecThree from "./WSceThree/WSecThree";
import { Shoes } from "./Model/Shoes";
import { Plane } from "./Model/Plane";
import { Logo } from "./Model/Logo";
import { Hand } from "./Model/Hand";
import { Maps } from "./Model/Maps";


import Wave from "react-wavify";
import { Map } from "../AboutUs/Model/Map";



const Accueil = () => {



  return (
    <div className=" ">
      <div className=" relative -mt-20 overflow-hidden z-10">
      <div className="h-screen w-full -mt-7">
        <img
          src={welcomeBg}
          alt=""
          draggable={false}
          className="object-cover lg:object-none h-full lg:h-auto lg:w-full"
        />
      </div>

      <div className="  absolute top-20 ">
        {/* ===========shoes============= */}

        <Canvas
          camera={{ fov: 50, position: [0, 0, 20] }}
          className=" absolute bottom-0 !w-screen !h-screen z-1 "
          enableZoom={true}
          rotation={[0, -0.4, 0]}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
          
            <directionalLight position={[3, 5, 0]} />
            <pointLight position={[3, 10, 3]} />

            <Shoes position={[-17, -7, -10]} rotation={[-0.2, 1, 0]} scale={0.6} />
            
            <Plane position={[4, -4, 0]} rotation={[0.1, 0.2, 0]} scale={4} />

            <Logo position={[0, -4.2, 0]} scale={0.6}/>

            <Hand
            scale={1.2}
              className=""
              position={[4, -4.5, 6]}
              rotation={[2, -2.1, 2]}
            />

            <Maps position={[11, -4.5, 3]} scale={1.3} rotation={[-0.3, -2, -0.2]} />
          </Suspense>
        </Canvas>

        {/* section link==================== */}
        <div className="">
          <a href="#shoe">
            <div className="h-52 w-52  rounded-full absolute top-[35%] left-[10%] z-10"></div>
          </a>

          <a href="#plane">
            <div className="h-52 w-52  rounded-full absolute top-[40%] left-[27%] z-10"></div>
          </a>
          {/* <a href="#hand">
            <div className="h-52 w-52   rounded-full absolute top-[40%] right-[27%] z-10"></div>
          </a> */}
          {/* <a href="#map">
            <div className="h-52 w-52  rounded-full absolute top-[35%] right-[13%] z-10"></div>
          </a> */}
        </div>
      </div>
      {/* ============section 1 blocks========================== */}

      <div className="relative mt-10">
        <Wave
          id="shoe"
          className="h-screen -mt-20 lg:-mt-0"
          fill="#ffff"
          paused={false}
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.15,
            points: 5,
          }}
        />
        <div className="absolute top-40 lg:px-20 grid lg:grid-cols-2 h-screen">
          {/* shoe block----- */}
          <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
            >
              
              <Canvas
                className="-mt-28 "
                camera={{ fov: 30, position: [1, 2, 2] }}
              >
                <Suspense fallback={null}>
                  <ambientLight />
                  <directionalLight position={[3, 10, 3]} />
                  <pointLight position={[-2, 2, -1]} />
                  <OrbitControls
                    enableZoom={false}
                    maxAzimuthAngle={0}
                    minAzimuthAngle={0}
                    maxPolarAngle={0}
                    minPolarAngle={1}
                  />
                  <Shoes  position={ [0, 0.5, 0]} />
                </Suspense>
              </Canvas>
            </div>
          <div
            data-aos="zoom-in-up"
            data-aos-anchor-placement="top-center"
            className="p-7"
          >
            <h2 className="text-3xl font-semibold my-10">
              Choisir Kibyon, c’est oser avancer.
            </h2>
            <p className="text-justify">
              Créer une entreprise ou démarrer un projet, peut être tout autant
              exaltant qu’anxiogène. Il est souvent difficile de savoir par où
              commencer, comment se projeter à 3 – 5 ans, choisir la stratégie
              adaptée…
            </p>
          </div>
        </div>
        {/* plane---------- */}
        <div className="relative -mt-20">
          <Wave
            id="plane"
            className="h-screen -mt-20 lg:-mt-0"
            fill="#0432c9"
            paused={false}
            options={{
              height: 20,
              amplitude: 40,
              speed: 0.15,
              points: 5,
            }}
          />
          <div className="grid lg:grid-cols-2 lg:p-20 h-screen absolute top-10">
            <div
              data-aos="zoom-in-up"
              data-aos-anchor-placement="top-center"
              className="p-5 text-base-100"
            >
              <h2 className="text-3xl font-semibold my-10">
                Et si on avançait ensemble ?
              </h2>
              <p className="text-justify">
                Nous proposons une nouvelle façon de faire du conseil aux
                entreprises. Basé sur l’écoute, l’individualisation des
                solutions coconstruites avec vous, la personnalisation des
                offres pour que vous n’ayez plus à payer des prestations
                inutiles… et tant d’autres éléments qui rendent notre approche
                unique et bienveillante.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
            >
              
              <Canvas
                className="-mt-28 "
                camera={{ fov: 30, position: [1, 2, 2] }}
              >
                <Suspense fallback={null}>
                  <ambientLight />
                  <directionalLight position={[3, 10, 3]} />
                  <pointLight position={[-2, 2, -1]} />
                  <OrbitControls
                    enableZoom={false}
                    maxAzimuthAngle={0}
                    minAzimuthAngle={0}
                    maxPolarAngle={0}
                    minPolarAngle={1}
                  />
                  <Plane position={[2.2, -0.1, 0]} rotation={[-0.4, 0.37, 0]} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
        {/* hand--------------------- */}
        <div className="relative -mt-20 overflow-hidden">
          <Wave
            id="hand"
            className="h-screen -mt-20 lg:-mt-0"
            fill="#ffff"
            paused={false}
            options={{
              height: 20,
              amplitude: 40,
              speed: 0.15,
              points: 5,
            }}
          />
          <div className="lg:p-20  grid lg:grid-cols-2 h-screen absolute top-20  ">
            <div
              className=""
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
            >
              
              <Canvas
                camera={{ fov: 60, position: [1, 0, 2] }}
                className="lg:-mt-28 -ml-20"
              >
                <Suspense fallback={null}>
                  <ambientLight />
                  <directionalLight position={[3, 10, 6]} />
                  <pointLight position={[3, 10, 6]} />

                  <Hand
                    className=""
                    position={[-0.5, -1.3, 0]}
                    rotation={[1.3, -2.3, 2]}
                  />
                </Suspense>
              </Canvas>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-anchor-placement="top-center"
              className="p-5"
            >
              <h2 className="lg:text-3xl text-2xl font-semibold my-10">
                Un conseil personnalisé et adapté
              </h2>
              <p className="text-justify">
                Nous ne sommes pas là pour vous vendre des copier-coller de
                Powerpoint avec des méthodes d'analyses révolues. Kibyon est là
                pour comprendre votre projet dans son intégralité et ainsi,
                pouvoir vous challenger, vous faire des suggestions et évaluer
                différents scenarios à 360° (incluant tous les départements :
                finance, marketing, R.H, logistique…) adaptés aux objectifs de
                votre projet.
              </p>
            </div>
          </div>
        </div>

        {/* map block----- */}

        <div className="relative  -mt-20 overflow-hidden">
          <Wave
            id="map"
            className="h-screen mt-3 lg:-mt-0"
            fill="#0432c9"
            paused={false}
            options={{
              height: 20,
              amplitude: 40,
              speed: 0.15,
              points: 5,
            }}
          />
          <div className="lg:px-20  grid lg:grid-cols-2 h-screen absolute top-40 text-base-100">
            <div
              data-aos="zoom-in-up"
              data-aos-anchor-placement="top-center"
              className="p-5"
            >
              <h2 className="lg:text-3xl text-2xl font-semibold my-10">
                Pour répondre à vos besoins
              </h2>
              <p className="text-justify">
                Il existe une multitude de chemins pour atteindre un but, notre
                objectif est d’identifier avec vous des stratégies porteuses de
                sens et de valeur ajoutée qui correspondront au mieux à votre
                projet. Votre besoin est constamment au cœur de notre réflexion
                pour vous conseiller ce qui nous semble le mieux pour vous et
                votre entreprise.
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
            >
           

              <Canvas
                className=" lg:-mt-28 "
                camera={{ fov: 70, position: [1, 4, 3] }}
                shadowMap
              >
                <Suspense fallback={null}>
                  <directionalLight position={[3, 10, 6]} />
                  <ambientLight />
                  <pointLight position={[3, 10, 6]} />
                  <OrbitControls
                    enableZoom={false}
                    autoRotate
                    maxPolarAngle={0}
                    minPolarAngle={1}
                  />
                  <Map position={ [0, 0.5, 0]}/>
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- */}
     
    </div>

      <section className="relative z-20">
        <WSecTwo />
      </section>

      <WSecThree />
    </div>
  );
};

export default Accueil;
