import React, { ReactNode } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Box, Container } from '@mui/material'

type PropType = {
  options?: EmblaOptionsType
  slides: ReactNode[]
}

const sxEmbla = {
  overflow: 'hidden',
  // px: 3
}

const sxEmblaContainer = {
  display: 'flex',
}

const sxEmblaSlide = {
  position: 'relative',
  marginRight: '.5rem',
  flex: '0 0 7rem',
}

export const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <Container sx={sxEmbla} ref={emblaRef}>
      <Box sx={sxEmblaContainer}>
        {slides.map((slide, index) => (
          <Box sx={sxEmblaSlide} key={index}>
            {slide}
          </Box>
        ))}
      </Box>
    </Container>
  )
}