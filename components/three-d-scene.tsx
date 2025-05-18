"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

// UI Image component that replaces the 3D model
function UIImage() {
  const meshRef = useRef<THREE.Mesh>(null)
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EBvd8CRWjqq2e0YAfqGZwa8L5SFecx.png",
  )

  // Make the texture crisp
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter

  useFrame(() => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.rotation.y = Math.sin(Date.now() * 0.001) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[3.5, 2.5]} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  )
}

// Main 3D scene component with adjusted camera settings
export default function ThreeDScene({ showESPStatus = true }: { showESPStatus?: boolean }) {
  return (
    <div className="w-full h-full relative">
      <Canvas shadows camera={{ position: [0, 0, 3], fov: 45 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#ff4040" />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#4040ff" />

        <UIImage />

        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  )
}
