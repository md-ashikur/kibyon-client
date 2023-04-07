import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import "./AboutUs.css";
import welcomeBg from "../../img/intro welcome page background.png";
import { Shoes } from "./Model/Shoes";
import { Plane } from "./Model/Plane";
import { Logo } from "./Model/Logo";
import { Hand } from "./Model/Hand";
import { Maps } from "./Model/Maps";
import Wave from "react-wavify";
import { Link } from "react-router-dom";

const AboutUs = () => {
 

  return (
   <div className="my-20 text-center text-5xl h-screen">
    about us coming soon
   </div>
  );
};

export default AboutUs;
