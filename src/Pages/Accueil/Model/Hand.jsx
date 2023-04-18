import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

export function Hand(props) {
  const group = useRef();
    const { nodes, materials, animations } = useGLTF('/Models/handSewing.glb')
    const { actions } = useAnimations(animations, group)

    
 



const handGroupRef = useRef();
const [hovered, setHovered] = useState(false);

useEffect(() => {
  if (hovered) {
    gsap.to(handGroupRef.current.position, {
      y: -0.5,
      blur: 5,
      opacity:0.4,
      duration: 0.5,
    });
  } else {
    gsap.to(handGroupRef.current.position, {
      z: 0,
      blur: 0,
      duration: 0.5,
    });
  }
}, [hovered]);

    return (
      <group ref={group} {...props} dispose={null}>
        <group ref={handGroupRef} name="Scene" onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
         
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
            <group name="10d303afd96646438dfea7a6b7c7c561fbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode">
                <group name="aguja" position={[0.75, 37.17, -5.21]} rotation={[Math.PI / 2, 1.47, 2.11]} scale={0.4}>
                  <mesh name="aguja_aguja_0" geometry={nodes.aguja_aguja_0.geometry} material={materials.aguja} position={[1.54, 9.19, 8.36]} rotation={[0.16, -0.1, 0.01]} />
                </group>
                <group name="hilo" position={[1.98, 28.18, 11.53]} rotation={[Math.PI / 2, 1.47, -Math.PI]} scale={0.4}>
                  <mesh name="hilo_hilo_0" geometry={nodes.hilo_hilo_0.geometry} material={materials.hilo} position={[7.3, 3.4, 12.32]} rotation={[0, -0.19, 0]} />
                </group>
              </group>
            </group>
          </group>
          <group name="Armature" position={[0.11, 0.99, -0.67]} rotation={[1.26, 1.16, -0.54]}>
            <primitive object={nodes.pulseR} />
            <primitive object={nodes.index_tipR} />
            <primitive object={nodes.middle_tipR} />
            <primitive object={nodes.ring_tipR} />
            <primitive object={nodes.pinky_tipR} />
            <primitive object={nodes.thumb_tipR} />
            <skinnedMesh name="handSmooth001" geometry={nodes.handSmooth001.geometry} material={materials.lambert1} skeleton={nodes.handSmooth001.skeleton} />
          </group>
        
        </group>
      </group>
    )
  }
  