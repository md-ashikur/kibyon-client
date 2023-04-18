import { gsap, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

import "./AboutUs.css";
import vf from "../../Videos/Prévi VF (2023).mp4";

const AboutUs = () => {

//   const intro = document.querySelector('.intro');
//   const video = intro.querySelector('video');
//   const text= intro.querySelector('h1');

// const section = document.querySelector("section");
// const end = section.querySelector('h1');

// scrollMagic-----------------
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const video = document.querySelector(".myVideo");

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "top center",
      end: "+=100%",
      scrub: true,
      markers: true,
      pin: true
    }
  });

  tl.to(".myVideo", {
    currentTime: 10,
    duration: 10,
    ease: "none"
  });
}, []);



  return (
    <div>
      <div className="h-screen bg-red-400"></div>
      <div className="intro">
        <h1>hello</h1>
        <video id="vf" src={vf}></video>
      </div>
      <section className="h-screen">
        <h1>next mission</h1>
      </section>


      <section id="section1">
  <video class="myVideo" src={vf} ></video>
    
    
    </section>
 
    </div>
  );
};

export default AboutUs;
