import Image from "next/image"

const loading = () => {
  return (
    <div className="bg-[#171720] w-screen h-screen grid place-items-center">
      <Image
        priority
        src="bouncing-ball.svg"
        alt="My SVG Image"
        width="300"
        height="300"
      />
    </div>
  )
}

export default loading
