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
import gsap, { Sine } from "gsap";
import { Link } from "react-router-dom";
import Wave from "react-wavify";

// =================plane======================

// =================logo=================

// ==================hand============================

// ===========Maps=================

const Accueil = () => {

 

  const shoeRef = useRef(null);
  const planeRef = useRef(null);
  const handRef = useRef(null);
  const mapRef = useRef(null);

  // shoe========================

  useEffect(() => {
    // -----------------shoe-------
    gsap.to(shoeRef.current, {
      duration: 2,
      yoyo: true,
      repeat: -1,
      y: "+=25",
      x: "+=5",
      rotation: "+=2",
      delay: 0.5,
      ease: "power1.inOut",
    });
    // -----------------plane-------
    gsap.to(planeRef.current, {
      duration: 3,
      yoyo: true,
      repeat: -1,
      y: "+=25",
      x: "-=20",
      rotation: "+=5",
      delay: 0.3,
      ease: "power1.inOut",
    });
    // -----------------hand--------
    gsap.to(handRef.current, {
      duration: 3,
      yoyo: true,
      repeat: -1,
      y: "+=20",
      x: "+=5",
      rotation: "-=20",
      delay: 0.8,
      ease: "power1.inOut",
    });

    // -----------map-----
    gsap.to(mapRef.current, {
      duration: 2,
      yoyo: true,
      repeat: -1,
      y: "+=20",
      x: "+=5",
      rotation: "-=5",

      ease: "power1.inOut",
    });
  }, []);



  return (
    <div className=" ">
      <section className="relative overflow-hidden">
        <div className="h-screen w-full -mt-9">
          <img
            src={welcomeBg}
            alt=""
            draggable={false}
            className="object-cover lg:object-none h-full lg:h-auto lg:w-full"
          />
        </div>

        <div className="flex lg:flex-row  justify-center absolute top-3 z-1">
          {/* ===========shoes============= */}

          <Canvas
            ref={shoeRef}
            camera={{ fov: 70, position: [0, 0, 35] }}
            className=" absolute  left-20 !h-screen "
          >
            <Suspense fallback={null}>
              <directionalLight position={[3, 10, 3]} />
              <pointLight position={[3, 10, 3]} />
              <OrbitControls
                enableZoom={false}
                maxAzimuthAngle={0}
                minAzimuthAngle={0}
                maxPolarAngle={0}
                minPolarAngle={1}
              />

              <Shoes position={[2.7, -1, 0]} />
            </Suspense>
          </Canvas>

          {/* =============plane============ */}
          <Canvas
            ref={planeRef}
            className="absolute !h-screen "
            camera={{ fov: 30, position: [1, 2, 8] }}
          >
            <Suspense fallback={null}>
              <directionalLight position={[3, 10, 3]} />
              <pointLight position={[0, 0, 2]} />
              <OrbitControls
                enableZoom={false}
                maxAzimuthAngle={0}
                minAzimuthAngle={0}
                maxPolarAngle={0}
                minPolarAngle={1}
              />
              <Plane position={[2.7, -0.3, 0]} rotation={[-0.8, 0.5, 0.2]} />
            </Suspense>
          </Canvas>

          {/* =============Logo============ */}
          <Canvas
            className=" absolute !h-screen "
            camera={{ fov: 55, position: [0, 20, 0] }}
          >
            <Suspense fallback={null}>
              <directionalLight position={[3, 5, 2]} />
              <pointLight position={[3, 2, 2]} />
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={0}
                minPolarAngle={1.6}
              />
              <Logo position={[0, -3.5, 0]} />
            </Suspense>
          </Canvas>

          {/* ==============hand============= */}

          <Canvas
            ref={handRef}
            camera={{ fov: 90, position: [1, 0, 5] }}
            className=" absolute !h-screen"
          >
            <Suspense fallback={null}>
              <ambientLight />
              <directionalLight position={[3, 10, 6]} />
              <pointLight position={[3, 10, 6]} />
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={0}
                minPolarAngle={1.6}
              />
              <Hand
                className=""
                position={[-1.3, -2.2, 0]}
                rotation={[2, -1.9, 2]}
              />
            </Suspense>
          </Canvas>

          {/* =============maps============ */}
          <Canvas
            ref={mapRef}
            className=" !h-screen right-20"
            camera={{ fov: 90, position: [1, 2, 6] }}
            shadowMap
          >
            <Suspense fallback={null}>
              <directionalLight
                position={[3, 10, 6]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={-10}
                shadow-camera-top={-10}
                shadow-camera-bottom={-10}
                castShadow
              />
              <pointLight position={[3, 10, 6]} />
              <OrbitControls
                enableZoom={false}
                autoRotate
                maxPolarAngle={0}
                minPolarAngle={1}
              />
              <Maps position={[0, -1, 0]} />

              <group>
                <mesh
                  receiveShadow
                  rotation={[-Math.PI / 2, 0, 0]}
                  position={[0, -7, 0]}
                >
                  <planeBufferGeometry attach="geometry" agrs={[100, 100]} />
                  <meshStandardMaterial attach="material" color={"red"} />
                  <shadowMaterial attach="material" color={"red"} />
                </mesh>
              </group>
            </Suspense>
          </Canvas>
        </div>

        {/* ============section 1 blocks========================== */}

        <div className="relative">
          <Wave
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
            <div></div>
            <div data-aos="zoom-in-up" data-aos-anchor-placement="top-center" className="p-7">
              <h2 className="text-3xl font-semibold my-10">
                Choisir Kibyon, c’est oser avancer.
              </h2>
              <p className="text-justify">
                Créer une entreprise ou démarrer un projet, peut être tout
                autant exaltant qu’anxiogène. Il est souvent difficile de savoir
                par où commencer, comment se projeter à 3 – 5 ans, choisir la
                stratégie adaptée…
              </p>
            </div>
          </div>
          {/* plane---------- */}
          <div className="relative -mt-20">
            <Wave
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
              <div data-aos="zoom-in-up" data-aos-anchor-placement="top-center" className="p-5 text-base-100">
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
              <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-duration="2000">
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
                    <Plane
                      position={[2.2, -0.1, 0]}
                      rotation={[-0.4, 0.37, 0]}
                    />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
          {/* hand--------------------- */}
          <div className="relative -mt-20">
            <Wave
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
            <div className="lg:p-20 grid lg:grid-cols-2 h-screen absolute top-20  ">
              <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                <Canvas
                  camera={{ fov: 60, position: [1, 0, 2] }}
                  className="-mt-28"
                >
                  <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight position={[3, 10, 6]} />
                    <pointLight position={[3, 10, 6]} />
                    <OrbitControls
                      enableZoom={false}
                      maxPolarAngle={0}
                      minPolarAngle={1}
                    />
                    <Hand
                      className=""
                      position={[-0.5, -1.3, 0]}
                      rotation={[1.3, -2.3, 2]}
                    />
                  </Suspense>
                </Canvas>
              </div>
              <div data-aos="zoom-in-up" data-aos-anchor-placement="top-center" className="p-5">
                <h2 className="text-3xl font-semibold my-10">
                  Un conseil personnalisé et adapté
                </h2>
                <p className="text-justify">
                  Nous ne sommes pas là pour vous vendre des copier-coller de
                  Powerpoint avec des méthodes d'analyses révolues. Kibyon est
                  là pour comprendre votre projet dans son intégralité et ainsi,
                  pouvoir vous challenger, vous faire des suggestions et évaluer
                  différents scenarios à 360° (incluant tous les départements :
                  finance, marketing, R.H, logistique…) adaptés aux objectifs de
                  votre projet.
                </p>
              </div>
            </div>
          </div>

          {/* map block----- */}

          <div className="relative ">
            <Wave
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
            <div className="lg:px-20 grid lg:grid-cols-2 h-screen absolute top-40 text-base-100">
              <div data-aos="zoom-in-up" data-aos-anchor-placement="top-center" className="p-5">
                <h2 className="text-3xl font-semibold my-10">
                  …Pour répondre à vos besoins
                </h2>
                <p className="text-justify">
                  Il existe une multitude de chemins pour atteindre un but,
                  notre objectif est d’identifier avec vous des stratégies
                  porteuses de sens et de valeur ajoutée qui correspondront au
                  mieux à votre projet. Votre besoin est constamment au cœur de
                  notre réflexion pour vous conseiller ce qui nous semble le
                  mieux pour vous et votre entreprise.
                </p>
              </div>

              <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                <Canvas
                  className="-mt-28 "
                  camera={{ fov: 70, position: [1, 2, 3] }}
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
                    <Maps position={[0, 0.5, 0]} />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <WSecTwo />
      </section>

      <WSecThree />
    </div>
  );
};

export default Accueil;
