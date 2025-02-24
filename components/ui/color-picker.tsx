import ColorPicker, { ColorPickerProps } from "@rc-component/color-picker"
import "@rc-component/color-picker/assets/index.css"

const ColorPickComponent = (props: ColorPickerProps) => {
  return <ColorPicker {...props} />
}

export default ColorPickComponent
