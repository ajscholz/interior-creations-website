import React, { useState } from "react"
import Lightbox from "react-spring-lightbox"
import Header from "./LightboxComponents/Header"
import Footer from "./LightboxComponents/Footer"
import ArrowButton from "./LightboxComponents/ArrowButton"

// import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

// const images = [
//   {
//     src:
//       'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
//     alt: 'Windows 10 Dark Mode Setting'
//   },
//   {
//     src:
//       'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
//     alt: 'macOS Mojave Dark Mode Setting'
//   },
//   {
//     src:
//       'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
//     alt: 'Android 9.0 Dark Mode Setting'
//   }
// ];

const CoolLightbox = props => {
  const { isOpen, currentImageIndex, setCurrentIndex, images, close } = props

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1)

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1)

  return (
    <Lightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
      onClose={() => close(false)}
      /* Add your own UI */
      renderHeader={() => (
        <Header
          galleryTitle="Dark Mode: OS Level Control In Your CSS"
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => close(false)}
        />
      )}
      renderFooter={() => (
        <Footer
          number={images.length}
          current={currentImageIndex}
          set={setCurrentIndex}
        />
      )}
      renderPrevButton={({ canPrev }) => (
        <ArrowButton
          position="left"
          onClick={gotoPrevious}
          disabled={!canPrev}
        />
      )}
      renderNextButton={({ canNext }) => (
        <ArrowButton position="right" onClick={gotoNext} disabled={!canNext} />
      )}
      /* Add styling */
      // className="cool-class"
      style={{
        background: "rgba(0,0,0,.9",
        zIndex: "2000",
        padding: "0 3rem 2.2rem 3rem",
      }}

      /* Handle closing */
      // onClose={handleClose}

      /* react-spring config for open/close animation */
      // pageTransitionConfig={{
      //   from: { transform: "scale(0.75)", opacity: 0 },
      //   enter: { transform: "scale(1)", opacity: 1 },
      //   leave: { transform: "scale(0.75)", opacity: 0 },
      //   config: { mass: 1, tension: 320, friction: 32 }
      // }}
    />
  )
}

export default CoolLightbox
