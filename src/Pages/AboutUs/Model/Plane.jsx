import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import gsap from "gsap"
import { useEffect } from "react"
import { useRef } from "react"
import { Color, DoubleSide, MeshBasicMaterial } from "three";

export function Plane(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/Models/Plane.glb')
    const { actions } = useAnimations(animations, group)

    const planeRef = useRef();

    


    useEffect(() => {
      const tween = gsap.to(planeRef.current.position, {
        y: '+0.3',
        x:'+=0.2',
        yoyo: true,
        repeat: -1,
        duration: 2,
        ease: 'power1.inOut',
      });
      return () => {
        tween.kill();
      };
    }, []);
  
    useFrame(() => {
      // Update any other animations here
     
    });



    return (
      <group ref={group} {...props} dispose={null} >
        <group ref={planeRef} name="Studio_limbo_3_point_lighting_2x2x2">
          <group name="Jet_03" position={[3.4, -5.76, -51.38]}>
            <mesh name="Jet_Flame_mesh_Icosphere"  geometry={nodes.Jet_Flame_mesh_Icosphere.geometry} material={new MeshBasicMaterial({
              color: new Color("gold"),
              side: DoubleSide,
              emissive: new Color("gold"),
              emissiveIntensity: 1,
             
            })} position={[-6.3, 5.95, 51.52]} scale={0.02} />
          </group>
          <group name="Jet_03002" position={[3.4, -5.76, -51.21]}>
            <mesh name="Jet_Flame_mesh_Icosphere001" geometry={nodes.Jet_Flame_mesh_Icosphere001.geometry} material={new MeshBasicMaterial({
              color: new Color("gold"),
              side: DoubleSide,
              emissive: new Color("gold"),
              emissiveIntensity: 1,
             
            })} position={[-6.31, 5.95, 51.49]} scale={0.02} />
          </group>
          <mesh name="Plane_With_Raised_Wings_Plane001" geometry={nodes.Plane_With_Raised_Wings_Plane001.geometry} material={materials.Paper} position={[-2.6, 0.22, 0.79]} rotation={[Math.PI / 2, 0, -1.57]} scale={0.2} />
          <mesh name="Text" geometry={nodes.Text.geometry} material={materials['Material.005']} position={[-2.9, 0.23, 0.36]} rotation={[2.3, -0.08, 0.02]} scale={0.03} />
        </group>
      </group>
    )
  }
  