import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import welcome from "../../../Videos/WP - Section 3 -Services 5 étoiles VF-03_2023.blend0001-0400.mkv"
gsap.registerPlugin(ScrollTrigger);

const WSecThree = () => {

   
        // const offerVideo1 = document.getElementById("offerVideo1");
        // // const offerVideo1Context = offerVideo1.getContext('2d');
        
        // // offerVideo1.height = Screen.height;
        // // offerVideo1.width = Screen.width;
        
        // const offerVideo1Info = {
        //     totalFrames: 50,
        //     totalTime: 7,
        //     images: [],
        //     currentFrame:1,
        //     currentImage : (index) => `./offerVideo1/marketStudy${index}.jpg`
        
        // }
        // console.log(offerVideo1.currentImage(1))
        // const img = new Image();
        // img.src = offerVideo1Info.currentImage(5)
        
        
        // img.onload = () => offerVideo1Context.drawImage(img, 0, 0)


       


  return (
    <div id="section" className="">
     
     <video  className="" >
            <source src={welcome} type="video/mp4" />
          </video>
    </div>
  );
};

export default WSecThree;
