import { Box, Container } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../Common/SectionTitle'
import { CountryFlag } from './CountryFlag'
import { GpInfo, IGpInfoProps } from './GpInfo'
import { SectionsData } from './SectionsData/SectionsData'

export const NextGp = ({ nextGp }: any) => {

  const { raceName, Circuit, date, time, FirstPractice, SecondPractice, ThirdPractice, Qualifying } = nextGp;
  const { circuitName, Location } = Circuit;
  const { country, locality } = Location;

  const sections = {
    race: {
      label: 'Race',
      date: date,
      time: time,
    },
    fpOne: {
      label: 'FP1',
      date: FirstPractice.date,
      time: FirstPractice.time,
    },
    fpTwo: {
      label: 'FP2',
      date: SecondPractice.date,
      time: SecondPractice.time,
    },
    fpThree: {
      label: 'FP3',
      date: ThirdPractice.date,
      time: ThirdPractice.time,
    },
    qualifying: {
      label: 'Quali',
      date: Qualifying.date,
      time: Qualifying.time,
    },
  }

  return (
    <Box>    
      <Container>
        <SectionTitle>Next GP</SectionTitle>
        <CountryFlag countryName={country} />
        <GpInfo
          name={raceName}
          circuit={circuitName}
          locality={locality}
          country={country}
        />
      </Container>
      <SectionsData sections={sections} />
    </Box>
  )
}