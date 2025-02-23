"use client"

import { Model } from "@/app/car"
import { Center, Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export default function Home() {
  return (
    <main className="h-screen relative">
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
      <div className="absolute sm:inset-4 lg:inset-6 xl:inset-8">
        <h1>Content</h1>
      </div>
    </main>
  )
}
