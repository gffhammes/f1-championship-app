import React from 'react'
import { EmblaCarousel } from '../../Common/EmblaCarousel'
import { SectionCard } from './SectionCard'

type Props = {}

export const SectionsData = ({ sections }: any) => {
  const { race, fpOne, fpTwo, fpThree, qualifying } = sections;

  const cards = [
    <SectionCard key={0} data={race} emphasis />,
    <SectionCard key={1} data={fpOne} />,
    <SectionCard key={2} data={fpTwo} />,
    <SectionCard key={3} data={fpThree} />,
    <SectionCard key={4} data={qualifying} />,
  ]

  return (
    <EmblaCarousel slides={cards} options={{ align: 0, dragFree: true, slidesToScroll: 3, containScroll: 'trimSnaps' }} />
  )
}