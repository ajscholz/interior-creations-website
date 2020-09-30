import React from "react"

const Parallax = ({ image }) => {
  return (
    <div
      style={{
        height: "500px",
        backgroundImage: `url(${image.fluid.src})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  )
}

export default Parallax
