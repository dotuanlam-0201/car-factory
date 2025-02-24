import { Button } from "@/components/ui/button"
import ColorPickComponent from "@/components/ui/color-picker"
import { useConfigStore } from "@/zustand/store"
import {
  ViewfinderCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid"
import { Color } from "@rc-component/color-picker"
import Image from "next/image"

const Factory = () => {
  const { dispatch, carColor } = useConfigStore()
  return (
    <div className="p-4 items-end w-full h-full flex bg flex-col gap-8">
      <ToggleButton />
      <h1>Magic Car Factory</h1>
      <ColorPickComponent
        defaultValue={carColor}
        onChange={(value: Color, info) =>
          dispatch({
            carColor: `rgb(${value.r},${value.g},${value.b})`,
          })
        }
      />
      <div className="absolute flex-wrap flex gap-4 justify-center bottom-10 w-full">
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
