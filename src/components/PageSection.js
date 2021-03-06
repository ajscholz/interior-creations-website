import React from "react"
import ImageSection from "../components/ImageSection"
import Button from "../components/Button"

import BringYourDreamsToLifeSection from "./sections/BringYourDreamsToLifeSection"
import WhatTheySaySection from "./sections/WhatTheySaySection"
import OurProcessSection from "./sections/OurProcessSection"

const PageSection = ({ section }) => {
  switch (section.id) {
    // We Bring Your Dreams To Life
    case "phe9grYPyoLRJzY6IoY2d":
      return <BringYourDreamsToLifeSection section={section} />

    // Our Process
    case "2uDsJfL05E53ZgLz9jN2fy":
      return <OurProcessSection section={section} />

    // What They Say
    case "6wpdhdbMpZnZw3558QnaT7":
      return <WhatTheySaySection section={section} />

    // Bring Your Dreams To Life
    case "33v3fTT7KSZgAD5KTmHCh":
      return (
        <ImageSection
          data={section}
          button={
            <Button as="a" href="tel:6149893503">
              Call Us Now
            </Button>
          }
          reverse
        />
      )
    default:
      return null
  }
}

export default PageSection
