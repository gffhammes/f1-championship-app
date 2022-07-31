import { Container } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../Common/SectionTitle'
import { CountryFlag } from './CountryFlag'
import { GpInfo, IGpInfoProps } from './GpInfo'
import { SectionsData } from './SectionsData'

export const NextGp = ({ nextGp }: any) => {

  const { raceName, Circuit } = nextGp;
  const { circuitName, Location } = Circuit;
  const { country, locality } = Location;

  console.log(nextGp)
  return (
    <Container>
      <SectionTitle>Next GP</SectionTitle>
      <CountryFlag countryName={country} />
      <GpInfo
        name={raceName}
        circuit={circuitName}
        locality={locality}
        country={country}
      />
      <SectionsData />
    </Container>
  )
}