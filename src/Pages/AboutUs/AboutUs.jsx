import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import "./AboutUs.css";
import welcomeBg from "../../img/intro welcome page background.png";
import { Shoes } from "./Model/Shoes";
import { Plane } from "./Model/Plane";
import { Logo } from "./Model/Logo";
import { Hand } from "./Model/Hand";
import { Maps } from "./Model/Maps";

const AboutUs = () => {
  const shoeRef = useRef(null);
  const planeRef = useRef(null);
  const handRef = useRef(null);
  

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
  
  }, []);


  
  



  return (
    <div className=" text-center h-auto relative -mt-20 overflow-hidden pb-10">
      <div className="h-screen w-full -mt-9">
        <img
          src={welcomeBg}
          alt=""
          draggable={false}
          className="object-cover lg:object-none h-full lg:h-auto lg:w-full"
        />
      </div>

      <div className="  absolute top-20 z-1">
        {/* ===========shoes============= */}

        <Canvas
         
          camera={{ fov: 50, position: [0, 0, 20] }}
          className=" absolute bottom-0 !w-screen !h-screen  "
        >
          <Suspense fallback={null}>
          <ambientLight intensity={0.2}/>
       
            <directionalLight position={[3, 10, 3]} />
            <pointLight position={[3, 10, 3]} />
            <OrbitControls
              enableZoom={false}
            />

            <Shoes position={[-17, -1, -10]} rotation={[0, 1, 0]} scale={0.5}/>

            <Plane position={[4, -2, 0]} rotation={[0.1, 0.2, 0]} scale={4} />

            <Logo position={[0, -3.5, 0]} />

            <Hand
              className=""
              position={[4, -2.2, 6]}
              rotation={[2, -1.9, 2]}
            />

            <Maps position={[10, 0, 3]} rotation={[0, -5.2, 0.5]} />
          </Suspense>
        </Canvas>
      </div>

    
    </div>
  );
};

export default AboutUs;
