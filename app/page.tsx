"use client"

import { Model } from "@/app/car"
import { Center, Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export default function Home() {
  return (
    <main className="h-screen">
      <Canvas
        camera={{ position: [0, 0, 70], fov: 2 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#171720"]} />
        <Environment preset={"city"} />
        <OrbitControls />
        <Center>
          <Model />
        </Center>
        <ambientLight intensity={Math.PI} />
      </Canvas>
    </main>
  )
}
