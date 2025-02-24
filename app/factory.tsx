import { Button } from "@/components/ui/button"
import ColorPickComponent from "@/components/ui/color-picker"
import { useConfigStore } from "@/zustand/store"
import {
  ViewfinderCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid"
import { Color } from "@rc-component/color-picker"

const Factory = () => {
  const { dispatch } = useConfigStore()
  return (
    <div className="p-4 items-end w-full flex bg flex-col gap-8">
      <ToggleButton />
      <h1>Magic Car Factory</h1>
      <ColorPickComponent
        onChangeComplete={(value: Color, info) =>
          dispatch({
            carColor: `rgb(${value.r},${value.g},${value.b})`,
          })
        }
      />
    </div>
  )
}

export default Factory

const ToggleButton = () => {
  const { isPreview, dispatch } = useConfigStore()
  return (
    <Button
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
