export const AboutStaticContentQuery = `
      query {
        allAboutDocuments(collectionName: "about") {
          tabLabel
          content
          imgUrls {
            alt
            label
            url
          }
          imageViewerStyles {
            isPreview
            soloIndex
            viewerStyle
            viewerSize
            carouselConfig {
              interval
              pauseOnFocus
              pauseOnHover
              showNavigationArrows
              showNavigationIndicators
            }
          }
          expansionPanels {
            expanded
            paragraphs
            title
            imgUrls {
              label
              url
              alt
            }
            imageViewerStyles {
              isPreview
              soloIndex
              viewerStyle
              viewerSize
              carouselConfig {
                interval
                pauseOnFocus
                pauseOnHover
                showNavigationArrows
                showNavigationIndicators
              }
            }
          }
        }
      }
    `;
