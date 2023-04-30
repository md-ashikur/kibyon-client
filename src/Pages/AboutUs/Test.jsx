import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { gsap } from "gsap";

function Plane(props) {
  const planeRef = useRef(null);

  const handlePlaneHover = () => {
    gsap.to(planeRef.current.scale, { duration: 0.3, x: 1.2, y: 1.2, z: 1.2 });
    gsap.to(".logo, .hand", { duration: 0.3, opacity: 0.2 });
  };

  const handlePlaneUnhover = () => {
    gsap.to(planeRef.current.scale, { duration: 0.3, x: 1, y: 1, z: 1 });
    gsap.to(".logo, .hand", { duration: 0.3, opacity: 1 });
  };

  return (
    <mesh
      {...props}
      ref={planeRef}
      onPointerOver={handlePlaneHover}
      onPointerOut={handlePlaneUnhover}
    >
      <planeGeometry />
      <meshBasicMaterial color="#e6e6e6" />
      <Html>
        <div className="absolute bottom-0 text-white mx-auto w-full">
          <p className="text-center text-2xl font-bold">This is Plane</p>
        </div>
      </Html>
    </mesh>
  );
}

function Logo(props) {
  const logoRef = useRef(null);

  const handleLogoHover = () => {
    gsap.to(".plane, .hand", { duration: 0.3, opacity: 0.2 });
  };

  const handleLogoUnhover = () => {
    gsap.to(".plane, .hand", { duration: 0.3, opacity: 1 });
  };

  return (
    <mesh
      {...props}
      ref={logoRef}
      onPointerOver={handleLogoHover}
      onPointerOut={handleLogoUnhover}
    >
      <boxGeometry />
      <meshBasicMaterial color="#4b4b4b" />
      <Html>
        <div className="absolute bottom-0 text-white mx-auto w-full">
          <p className="text-center text-2xl font-bold">This is Logo</p>
        </div>
      </Html>
    </mesh>
  );
}

function Hand(props) {
  const handRef = useRef(null);

  const handleHandHover = () => {
    gsap.to(".plane, .logo", { duration: 0.3, opacity: 0.2 });
  };

  const handleHandUnhover = () => {
    gsap.to(".plane, .logo", { duration: 0.3, opacity: 1 });
  };

  return (
    <mesh
      {...props}
      ref={handRef}
      onPointerOver={handleHandHover}
      onPointerOut={handleHandUnhover}
    >
      <sphereGeometry />
      <meshBasicMaterial color="#5f5f5f" />
      <Html>
        <div className="absolute bottom-0 text-white mx-auto w-full">
          <p className="text-center text-2xl font-bold">This is Hand</p>
        </div>
      </Html>
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas
      camera={{ fov: 50, position: [0, 0, 20] }}
      className="absolute bottom-0 w-screen h-screen z-1"
      ></Canvas>
  )
}