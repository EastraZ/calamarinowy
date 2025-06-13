"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Html, useGLTF, PerspectiveCamera } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"

function ScientistModel() {
  const meshRef = useRef<any>(null)
  const [hovered, setHovered] = useState(false)

  // Load the scientist model using useGLTF hook
  const { scene } = useGLTF("/assets/3d/rust_scientist_blue.glb")

  // Force the scientist to be centered and properly positioned
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = 0 // Face forward instead of backward
      meshRef.current.position.set(0, -1.2, 0) // Lowered position
    }
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      // Enhanced floating animation
      meshRef.current.position.y = -1.2 + Math.sin(state.clock.elapsedTime * 0.8) * 0.15

      // Bidirectional rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3

      // Scale effect when hovered
      const targetScale = hovered ? 1.1 : 1
      const currentScale = meshRef.current.scale.x
      const newScale = currentScale + (targetScale - currentScale) * 0.1
      meshRef.current.scale.set(newScale, newScale, newScale)
    }
  })

  return (
    <group
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, -1.2, 0]}
      scale={[2.2, 2.2, 2.2]}
    >
      <primitive object={scene} />

      {/* Interactive speech bubble */}
      {hovered && (
        <Html position={[0, 2.5, 0]} center>
          <motion.div
            className="bg-black/95 backdrop-blur-sm border-2 border-blue-400 rounded-2xl p-4 shadow-2xl max-w-xs relative z-50"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white text-sm font-bold leading-relaxed">
              🎮 <span className="text-red-400">Ready to dominate?</span>
              <br />
              <span className="text-blue-300">Rust • Fortnite • Apex</span>
              <br />
              <span className="text-green-400">🚀 Undetected since 2023!</span>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-blue-400/20 animate-pulse pointer-events-none"></div>
          </motion.div>
        </Html>
      )}

      {/* Status tags - positioned better and more visible */}
      <Html position={[2.5, 1.5, 0]} center>
        <motion.div
          className="bg-black/90 backdrop-blur-sm border border-green-400 rounded-lg px-3 py-2 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center text-green-400 text-xs font-bold">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            ONLINE
          </div>
        </motion.div>
      </Html>

      <Html position={[-2.5, 1.5, 0]} center>
        <motion.div
          className="bg-black/90 backdrop-blur-sm border border-purple-400 rounded-lg px-3 py-2 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-purple-400 text-xs font-bold">🚀 AI ACTIVE</div>
        </motion.div>
      </Html>

      <Html position={[0, -1.8, 0]} center>
        <motion.div
          className="bg-black/90 backdrop-blur-sm border border-blue-400 rounded-lg px-3 py-2 shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="text-blue-400 text-xs font-bold">v4.0.1 ULTRA</div>
        </motion.div>
      </Html>
    </group>
  )
}

// Loading component
function LoadingIndicator() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-32 h-32 relative">
        <motion.div
          className="absolute inset-0 border-4 border-red-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 border-4 border-t-red-500 border-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>
      <div className="mt-4 text-white font-medium">Loading Model...</div>
    </div>
  )
}

export default function ScientistModelViewer() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) {
    return <div className="w-full h-full bg-black/20 rounded-lg"></div>
  }

  return (
    <div className="w-full h-full relative">
      <Canvas shadows className="cursor-pointer w-full h-full" style={{ background: "transparent" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={45} />

        {/* Enhanced lighting */}
        <ambientLight intensity={2.0} />
        <directionalLight position={[0, 5, 5]} intensity={2} castShadow />
        <pointLight position={[-3, 3, -3]} intensity={0.8} color="#4040ff" />
        <pointLight position={[3, 3, 3]} intensity={0.8} color="#ff4040" />

        <Environment preset="city" />

        <AnimatePresence>
          {isLoaded && (
            <motion.group initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <ScientistModel />
            </motion.group>
          )}
        </AnimatePresence>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
          minAzimuthAngle={-Math.PI / 6}
          maxAzimuthAngle={Math.PI / 6}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {!isLoaded && <LoadingIndicator />}

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
