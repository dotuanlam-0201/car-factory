"use client"

import { Model } from "@/app/car"
import Factory from "@/app/factory"
import { useGSAP } from "@gsap/react"
import { Center, Environment, Html, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"

gsap.registerPlugin(useGSAP) // register any plugins, including the useGSAP hook

export default function Home() {
  return (
    <main className="h-screen relative">
      <Canvas
        camera={{ position: [0, 0, 70], fov: 2 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#171720"]} />
        <Environment preset={"city"} />
        <OrbitControls enableDamping />
        <Center>
          <Model />
        </Center>
        <ambientLight intensity={Math.PI} />
        <Html fullscreen>
          <Factory />
        </Html>
      </Canvas>
    </main>
  )
}
