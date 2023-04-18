import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


export function Logo(props) {
    const { nodes, materials } = useGLTF('/Models/LogoKibyon.glb')

   

    return (
      <group {...props} dispose={null}   >
        <mesh geometry={nodes.Round_Cube.geometry} material={materials.Apple_Voice_Memos} rotation={[0, 1.57, 0]} scale={[1.26, 2.74, 2.74]} />
        <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.056']} position={[-0.18, -1.96, 1.91]} rotation={[1.53, 0.68, 0.07]} scale={[398.38, 752.7, 398.7]} />
        <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.056']} position={[-0.88, -1.23, 1.96]} rotation={[Math.PI / 2, 0, 0]} scale={[398.38, 752.7, 598.05]} />
        <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.056']} position={[1.89, 0.58, 1.95]} rotation={[-Math.PI / 2, 0.65, -Math.PI]} scale={[413.38, 752.7, 398.7]} />
        <mesh geometry={nodes.texte.geometry} material={materials['Material.001']} position={[-0.37, -1.14, 2.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0.09, 0.1, 0.09]} />
      </group>
    )
  }