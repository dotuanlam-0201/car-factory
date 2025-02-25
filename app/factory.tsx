import { Button } from "@/components/ui/button"
import ColorPickComponent from "@/components/ui/color-picker"
import { useConfigStore } from "@/zustand/store"
import { useGSAP } from "@gsap/react"
import {
  ViewfinderCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid"
import { Color } from "@rc-component/color-picker"
import gsap from "gsap"
import Image from "next/image"
import { useRef } from "react"

const Factory = () => {
  const { dispatch, carColor, isPreview } = useConfigStore()
  console.log("🚀 ~ Factory ~ isPreview:", isPreview)
  const container = useRef(null)

  useGSAP(
    () => {
      if (isPreview) {
        gsap.from(["h1#title", "div#pallet-color"], {
          opacity: 0,
          x: 200,
          duration: 1,
        })
        gsap.from(["div#list-decal"], {
          opacity: 0,
          y: 300,
          duration: 1,
        })
      } else {
        gsap.to(["h1#title", "div#pallet-color"], {
          opacity: 0,
          x: 200,
          duration: 1,
        })
        gsap.to(["div#list-decal"], {
          opacity: 0,
          y: 300,
          duration: 1,
        })
      }
    },
    {
      scope: container,
      dependencies: [isPreview],
      revertOnUpdate: true,
    }
  )

  return (
    <div
      ref={container}
      className="p-4 items-end w-full h-full flex bg flex-col gap-8"
    >
      <ToggleButton />
      <h1 id="title">Magic Car Factory</h1>
      <div id="pallet-color">
        <ColorPickComponent
          defaultValue={carColor}
          onChange={(value: Color) =>
            dispatch({
              carColor: `rgb(${value.r},${value.g},${value.b})`,
            })
          }
        />
      </div>
      <div
        id="list-decal"
        className="absolute flex-wrap flex gap-4 justify-center bottom-10 w-full"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            onClick={() => dispatch({ decal: `/decal${i + 1}.png` })}
            className="hover:scale-110 cursor-pointer transition-transform"
            key={i}
            priority
            quality={100}
            src={`/decal${i + 1}.png`}
            width={100}
            height={100}
            alt={"Decal"}
          />
        ))}
      </div>
    </div>
  )
}

export default Factory

const ToggleButton = () => {
  const { isPreview, dispatch } = useConfigStore()
  return (
    <Button
      size={"lg"}
      onClick={() =>
        dispatch({
          isPreview: !isPreview,
        })
      }
      className="absolute left-4"
      variant={"secondary"}
    >
      {isPreview ? "Preview" : "Customize"}{" "}
      {isPreview ? <ViewfinderCircleIcon /> : <WrenchScrewdriverIcon />}
    </Button>
  )
}
