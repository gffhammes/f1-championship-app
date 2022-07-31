import React from 'react'
import { EmblaCarousel } from '../Common/EmblaCarousel'
import { SectionCard } from './SectionCard'

type Props = {}

export const SectionsData = ({ sections }: any) => {
  const { race, fpOne, fpTwo, fpThree, qualifying } = sections;
  console.log(sections)

  const cards = [
    <SectionCard data={race} emphasis />,
    <SectionCard data={fpOne} />,
    <SectionCard data={fpTwo} />,
    <SectionCard data={fpThree} />,
    <SectionCard data={qualifying} />,
  ]

  return (
    <EmblaCarousel slides={cards} options={{ align: 0 }} />
  )
}