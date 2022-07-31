import React, { ReactNode } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Box } from '@mui/material'

type PropType = {
  options?: EmblaOptionsType
  slides: ReactNode[]
}

const sxEmbla = {
  overflow: 'hidden',
}

const sxEmblaContainer = {
  display: 'flex',
  marginLeft: '1rem',
}

const sxEmblaSlide = {
  position: 'relative',
  marginRight: '.5rem',
  flex: '0 0 30%',
}

export const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <Box sx={sxEmbla} ref={emblaRef}>
      <Box sx={sxEmblaContainer}>
        {slides.map((slide, index) => (
          <Box sx={sxEmblaSlide} key={index}>
            {slide}
          </Box>
        ))}
      </Box>
    </Box>
  )
}