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
import { TweenLite } from "gsap/gsap-core";

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
      delay:0.5,
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
      delay:0.3,
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
      delay:0.8,
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
          <img src={welcomeBg} alt="" draggable={false} />
        </div>

        <div className="flex lg:flex-row flex-col justify-center absolute top-3 z-1">
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
              
              <Shoes  position={[2.7, -1, 0]} />
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
              <Plane position={[2.7, -0.3, 0]} rotation={[-0.8,0.5,0.2]}/>
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
              <Hand position={[-1.3, -2.2, 0]} rotation={[2, -1.9, 2]} />
            </Suspense>
          </Canvas>

          {/* =============maps============ */}
          <Canvas
            ref={mapRef}
            className=" !h-screen right-20"
            camera={{ fov: 90, position: [1, 2, 6] }}
          >
            <Suspense fallback={null}>
              <directionalLight position={[3, 10, 6]} />
              <pointLight position={[3, 10, 6]} />
              <OrbitControls
                enableZoom={false}
                autoRotate
                maxPolarAngle={0}
                minPolarAngle={1}
              />
              <Maps position={[0, -1, 0]} />
            </Suspense>
          </Canvas>
      
        </div>
      </section>

      <section>
        <WSecTwo />
      </section>

      <WSecThree />

      <div className="w-52 h-52 bg-red-500"></div>
    </div>
  );
};

export default Accueil;
