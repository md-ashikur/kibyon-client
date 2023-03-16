import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import "./Accueil.css";
import welcomeBg from "../../img/intro welcome page background.png";


// =========shoes================
function Shoes(props) {
  const { nodes, materials } = useGLTF('/Models/Shoes.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-3.6, 2.24, 1.1]} rotation={[-Math.PI / 2, 0, 0.32]} scale={16.64}>
        <mesh geometry={nodes.Aviators_Black_gloss_0.geometry} material={materials.Black_gloss} />
        <mesh geometry={nodes.Aviators_Glass_tinted_0.geometry} material={materials.Glass_tinted} />
        <mesh geometry={nodes.Aviators_Gold_metallic_0.geometry} material={materials.Gold_metallic} />
        <mesh geometry={nodes.Aviators_Silver_metallic_0.geometry} material={materials.Silver_metallic} />
        <mesh geometry={nodes.Aviators_Transparent_0.geometry} material={materials.Transparent} />
      </group>
      <group position={[-6.05, 0.71, 0.79]} rotation={[-Math.PI / 2, 0, 0]} scale={0.24}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.shoe_shoe_0.geometry} material={materials.shoe} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.shoelace_shoelace_0.geometry} material={materials.shoelace} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
      <group position={[-8.32, 2.27, 0.97]} rotation={[-Math.PI / 2, 0, -0.14]} scale={16.64}>
        <mesh geometry={nodes.Aviators_Black_gloss_0001.geometry} material={materials.Black_gloss} />
        <mesh geometry={nodes.Aviators_Glass_tinted_0001.geometry} material={materials.Glass_tinted} />
        <mesh geometry={nodes.Aviators_Gold_metallic_0001.geometry} material={materials.Gold_metallic} />
        <mesh geometry={nodes.Aviators_Silver_metallic_0001.geometry} material={materials.Silver_metallic} />
        <mesh geometry={nodes.Aviators_Transparent_0001.geometry} material={materials.Transparent} />
      </group>
    </group>
  )
}

// =================plane======================
// function Plane(props) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF("/Plane.glb");
//   const { actions } = useAnimations(animations, group);
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Studio_limbo_3_point_lighting_2x2x2">
//         <group name="Jet_03" position={[3.4, -5.76, -51.38]}>
//           <mesh
//             name="Jet_Flame_mesh_Icosphere"
//             geometry={nodes.Jet_Flame_mesh_Icosphere.geometry}
//             material={materials["Flame fire material 2.001"]}
//             position={[-6.3, 5.95, 51.52]}
//             scale={0.02}
//           />
//         </group>
//         <group name="Jet_03002" position={[3.4, -5.76, -51.21]}>
//           <mesh
//             name="Jet_Flame_mesh_Icosphere001"
//             geometry={nodes.Jet_Flame_mesh_Icosphere001.geometry}
//             material={materials["Flame fire material 2.002"]}
//             position={[-6.31, 5.95, 51.49]}
//             scale={0.02}
//           />
//         </group>
//         <mesh
//           name="Plane_With_Raised_Wings_Plane001"
//           geometry={nodes.Plane_With_Raised_Wings_Plane001.geometry}
//           material={materials.Paper}
//           position={[-2.6, 0.22, 0.79]}
//           rotation={[Math.PI / 2, 0, -1.57]}
//           scale={0.2}
//         />
//         <mesh
//           name="Text"
//           geometry={nodes.Text.geometry}
//           material={materials["Material.005"]}
//           position={[-2.9, 0.23, 0.36]}
//           rotation={[2.3, -0.08, 0.02]}
//           scale={0.03}
//         />
//       </group>
//     </group>
//   );
// }

// =================logo=================

function Logo(props) {
  const { nodes, materials } = useGLTF('/LogoKibyon.glb')
  return (
    <group {...props} dispose={null}  >
      <mesh geometry={nodes.Round_Cube.geometry} material={materials.Apple_Voice_Memos} rotation={[0, 1.57, 0]} scale={[1.26, 2.74, 2.74]} />
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.056']} position={[-0.18, -1.96, 1.91]} rotation={[1.53, 0.68, 0.07]} scale={[398.38, 752.7, 398.7]} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.056']} position={[-0.88, -1.23, 1.96]} rotation={[Math.PI / 2, 0, 0]} scale={[398.38, 752.7, 598.05]} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.056']} position={[1.89, 0.58, 1.95]} rotation={[-Math.PI / 2, 0.65, -Math.PI]} scale={[413.38, 752.7, 398.7]} />
      <mesh geometry={nodes.texte.geometry} material={materials['Material.001']} position={[-0.37, -1.14, 2.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0.09, 0.1, 0.09]} />
    </group>
  )
}

// ==================hand============================
function Hand(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Models/handSewing.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
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


// ===========Maps=================
function Maps(props) {
  const { nodes, materials } = useGLTF("/Maps.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        rotation={[0, -0.09, 0]}
        scale={0.97}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        scale={0.9}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials.water}
        position={[0, 0.06, 0]}
        scale={0.91}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials["Material.001"]}
        position={[-0.01, 0.21, 0.42]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Circle011.geometry}
        material={materials["Material.001"]}
        position={[-0.01, 0.21, 0.43]}
        rotation={[2.76, -1.52, 1.11]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[-0.87, 0.17, 0.25]}
        scale={0.09}
      >
        <group position={[0, 0.49, 0]}>
          <mesh
            geometry={nodes.Plane005_1.geometry}
            material={materials.Building}
          />
          <mesh
            geometry={nodes.Plane005_2.geometry}
            material={materials.Window}
          />
        </group>
        <mesh
          geometry={nodes.Plane005.geometry}
          material={nodes.Plane005.material}
          position={[0, 4.33, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.Circle001.geometry}
        material={nodes.Circle001.material}
        position={[0.69, 0.17, 0.23]}
        scale={0.09}
      >
        <group position={[0, 0.23, 0]}>
          <mesh
            geometry={nodes.Circle001_1.geometry}
            material={materials.Building}
          />
          <mesh
            geometry={nodes.Circle001_2.geometry}
            material={materials.Window}
          />
        </group>
        <mesh
          geometry={nodes.Circle003.geometry}
          material={nodes.Circle003.material}
          position={[0, 3.43, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[0.68, 0.17, -0.81]}
        rotation={[Math.PI, -0.03, Math.PI]}
        scale={0.09}
      >
        <group position={[0, 0.49, 0]}>
          <mesh
            geometry={nodes.Plane008_1.geometry}
            material={materials.Building}
          />
          <mesh
            geometry={nodes.Plane008_2.geometry}
            material={materials.Window}
          />
        </group>
        <mesh
          geometry={nodes.Plane008.geometry}
          material={nodes.Plane008.material}
          position={[0, 7.02, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plane009.geometry}
        material={nodes.Plane009.material}
        position={[-0.22, 0.18, -0.83]}
        rotation={[0, -0.65, 0]}
        scale={0.09}
      >
        <group position={[0, 0.49, 0]}>
          <mesh
            geometry={nodes.Plane011_1.geometry}
            material={materials.Building}
          />
          <mesh
            geometry={nodes.Plane011_2.geometry}
            material={materials.Window}
          />
        </group>
        <mesh
          geometry={nodes.Plane011.geometry}
          material={nodes.Plane011.material}
          position={[0, 2.8, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.Circle004.geometry}
        material={nodes.Circle004.material}
        position={[0.72, 0.16, -0.56]}
        scale={0.09}
      >
        <group position={[-0.05, 0.23, -0.01]}>
          <mesh
            geometry={nodes.Circle005_1.geometry}
            material={materials.Building}
          />
          <mesh
            geometry={nodes.Circle005_2.geometry}
            material={materials.Window}
          />
        </group>
        <mesh
          geometry={nodes.Circle006.geometry}
          material={nodes.Circle006.material}
          position={[0, 4.34, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.Circle007.geometry}
        material={nodes.Circle007.material}
        position={[-0.3, 0.17, 0.12]}
        scale={0.09}
      >
        <group position={[0, 0.23, 0]}>
          <mesh
            geometry={nodes.Circle008_1.geometry}
            material={materials.Building}
          />
          <mesh
            geometry={nodes.Circle008_2.geometry}
            material={materials.Window}
          />
        </group>
        <mesh
          geometry={nodes.Circle009.geometry}
          material={nodes.Circle009.material}
          position={[0, 1.14, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plane012.geometry}
        material={nodes.Plane012.material}
        position={[-0.06, 0.16, 0.82]}
        scale={0.09}
      >
        <group position={[0, 0.49, 0]}>
          <mesh
            geometry={nodes.Plane021.geometry}
            material={materials.Building}
          />
          <mesh
            geometry={nodes.Plane021_1.geometry}
            material={materials.Window}
          />
        </group>
        <mesh
          geometry={nodes.Plane017.geometry}
          material={nodes.Plane017.material}
          position={[0, 8.54, 0]}
        />
      </mesh>
      <group
        position={[-0.11, 0.16, 0.42]}
        rotation={[Math.PI / 2, 0, -1.66]}
        scale={0.1}
      >
        <mesh
          geometry={nodes.SnowMan_1.geometry}
          material={materials.defaultMat}
        />
        <mesh
          geometry={nodes.SnowMan_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        geometry={nodes.Circle010.geometry}
        material={materials["Material.002"]}
        position={[-0.33, 0.38, 0.19]}
        rotation={[1.51, 1.55, -Math.PI / 2]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Snow001.geometry}
        material={materials.Snow}
        position={[-0.76, 0.16, -0.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Trunk.geometry}
        material={materials.Trunk}
        position={[-0.76, 0.16, -0.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow.geometry}
        material={materials.Snow}
        position={[-0.75, 0.22, -0.36]}
        rotation={[Math.PI / 2, 0, 3.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow002.geometry}
        material={materials.Snow}
        position={[-0.85, 0.16, -0.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Trunk001.geometry}
        material={materials.Trunk}
        position={[-0.85, 0.16, -0.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow003.geometry}
        material={materials.Snow}
        position={[-0.85, 0.22, -0.35]}
        rotation={[Math.PI / 2, 0, 3.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow004.geometry}
        material={materials.Snow}
        position={[-0.41, 0.16, 0.73]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Trunk002.geometry}
        material={materials.Trunk}
        position={[-0.41, 0.16, 0.73]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow005.geometry}
        material={materials.Snow}
        position={[-0.4, 0.23, 0.74]}
        rotation={[Math.PI / 2, 0, 3.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow006.geometry}
        material={materials.Snow}
        position={[-0.83, 0.15, -0.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Trunk003.geometry}
        material={materials.Trunk}
        position={[-0.83, 0.15, -0.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow007.geometry}
        material={materials.Snow}
        position={[-0.83, 0.22, -0.38]}
        rotation={[Math.PI / 2, 0, 3.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow008.geometry}
        material={materials.Snow}
        position={[-0.93, 0.15, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Trunk004.geometry}
        material={materials.Trunk}
        position={[-0.93, 0.15, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow009.geometry}
        material={materials.Snow}
        position={[-0.92, 0.22, -0.37]}
        rotation={[Math.PI / 2, 0, 3.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow010.geometry}
        material={materials.Snow}
        position={[0.55, 0.15, 0.93]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Trunk005.geometry}
        material={materials.Trunk}
        position={[0.55, 0.15, 0.93]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow011.geometry}
        material={materials.Snow}
        position={[0.55, 0.22, 0.94]}
        rotation={[Math.PI / 2, 0, 3.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow012.geometry}
        material={materials.Snow}
        position={[0.46, 0.15, 0.94]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Trunk006.geometry}
        material={materials.Trunk}
        position={[0.46, 0.15, 0.94]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Snow013.geometry}
        material={materials.Snow}
        position={[0.46, 0.22, 0.95]}
        rotation={[Math.PI / 2, 0, 3.03]}
        scale={0}
      />
    </group>
  );
}






const Accueil = () => {


  return (
    <div className=" relative ">
      <div className="h-screen w-full -mt-9">
        <img src={welcomeBg} alt="" />
      </div>


      <div className="flex justify-center absolute top-20 left-28 z-1">

        {/* ===========shoes============= */}
        <Canvas camera={{ fov: 50, position: [0, 0, 14] }} className=" absolute lg:top-96">
          <Suspense fallback={null}>
          <directionalLight position={[3, 10, 3]}/>
            <pointLight position={[3, 10, 3]} />
            <OrbitControls enableZoom={false} maxPolarAngle={0} minPolarAngle={1}/>
          <Shoes  position={[3, -1, 0]}/>
          </Suspense>
        </Canvas>

        {/* =============plane============ */}
        {/* <Canvas className=" absolute lg:top-52 lg:left-[100%]" camera={{ fov: 50, position: [1, 0, 10] }}>
          <Suspense fallback={null}>
          <directionalLight position={[3, 10, 6]}/>
            <pointLight position={[3, 10, 6]} />
            <OrbitControls enableZoom={false} maxPolarAngle={0} minPolarAngle={1}/>
            <Plane />
          </Suspense>
        </Canvas> */}



        {/* =============Logo============ */}
        <Canvas className=" absolute lg:top-96"  camera={{ fov: 20, position: [0, 20, 0] }}>
          <Suspense fallback={null}>
            <directionalLight position={[3, 10, 6]}/>
            <pointLight position={[3, 10, 6]} />
            <OrbitControls enableZoom={false} maxPolarAngle={0} minPolarAngle={1.6}/>
            <Logo position={[0, 0, 0]} />
          </Suspense>
        </Canvas>




        {/* ==============hand============= */}

        <Canvas
          camera={{ fov: 40, position: [1, 0, 4] }}
          className=" absolute lg:top-96 lg:-left-[10%]"
        >
          <Suspense fallback={null}>
            <ambientLight/>
          <directionalLight position={[3, 10, 6]}/>
            <pointLight position={[3, 10, 6]} />
            <OrbitControls enableZoom={false} maxPolarAngle={0} minPolarAngle={1.6}/>
            <Hand position={[0, -1, 0]} rotation={[2,-1.9,2]}/>
          </Suspense>
        </Canvas>

        {/* =============maps============ */}
        <Canvas className=" absolute lg:top-96 lg:-left-[10%]" camera={{ fov: 50, position: [1, 2, 2.6] }}>
          <Suspense fallback={null}>
          <directionalLight position={[3, 10, 6]}/>
            <pointLight position={[3, 10, 6]} />
            <OrbitControls enableZoom={false} autoRotate/>
            <Maps />
          </Suspense>
        </Canvas>

      
      </div>
    </div>
  );
};

export default Accueil;
