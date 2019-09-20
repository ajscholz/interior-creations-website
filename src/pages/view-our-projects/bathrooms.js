import React, { useContext } from "react"
import Button from "../../components/Button"
import { ModalContext } from "../../context/ModalContext"

const Bathrooms = () => {
  const [, setModalOpen] = useContext(ModalContext)

  return (
    <>
      <div style={{}}>hi from bathrooms</div>
      <Button
        style={{ marginTop: "10rem" }}
        onClick={() => setModalOpen("image")}
      >
        Open Lightbox
      </Button>
    </>
  )
}

export default Bathrooms
