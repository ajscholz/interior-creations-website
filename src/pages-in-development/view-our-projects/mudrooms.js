// import React from "react"
// import { graphql } from "gatsby"

// import ProjectPageTemplate from "../../components/ProjectPageTemplate"

// const mudrooms = props => {
//   const { data } = props
//   const { page, projects } = data

//   return (
//     <>
//       <ProjectPageTemplate page={page} projects={projects.projects} />
//     </>
//   )
// }

// export default mudrooms

// export const data = graphql`
//   query {
//     page: contentfulPage(title: { eq: "Mudrooms" }) {
//       contentful_id
//       ...HeroBannerFragment
//     }
//     projects: allContentfulProject(
//       filter: { projectType: { eq: "Mudrooms" } }
//       sort: { fields: createdAt, order: DESC }
//     ) {
//       projects: edges {
//         project: node {
//           contentful_id
//           title
//           projectType
//           cabinetType
//           style
//           color
//           location {
//             lat
//             lon
//           }
//           gallery {
//             fluid {
//               ...GatsbyContentfulFluid_withWebp
//             }
//             image: file {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `
