"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, Float, PresentationControls } from "@react-three/drei"
import { motion } from "framer-motion"

function Model(props: any) {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const ref = useRef<any>()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = Math.sin(t / 4) / 4
    ref.current.rotation.z = Math.sin(t / 4) / 4
    ref.current.position.y = Math.sin(t / 1.5) / 10
  })

  return <primitive object={scene} ref={ref} {...props} />
}

export default function DecorativeElement({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`w-40 h-40 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Float rotationIntensity={0.4}>
            <Model scale={2} position={[0, -1, 0]} />
          </Float>
        </PresentationControls>
        <Environment preset="studio" />
      </Canvas>
    </motion.div>
  )
}

