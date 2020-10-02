import BackgroundImage from "gatsby-background-image"
import React from "react"

const Parallax = ({ image }) => {
  return (
    <BackgroundImage
      fluid={image.fluid}
      style={{
        height: "500px",
        // backgroundImage: `url(${image.fluid.src})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  )
}

export default Parallax
