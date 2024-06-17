import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Hamburger = ({isMobile}) => {
  const hamburger = useGLTF("./hamburger/scene.gltf")
  
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={1} />
      <SpotLight
        position={[-20, 50, 10]}
        penumbra={1}
        intensity={1}
        angle={0.12}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={hamburger.scene}
        scale={isMobile ? 1 : 1.8}
        position={isMobile ? [0, -3, -2.2] : [0, -2, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  )
}

const HamburgerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    
    setIsMobile(mediaQuery.matches)

    const HandleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", HandleMediaQueryChange);

    return () => {
        mediaQuery.removeEventListener("change", HandleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Hamburger isMobile={ isMobile }/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default HamburgerCanvas