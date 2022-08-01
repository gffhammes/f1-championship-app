import { Box, Stack } from '@mui/material'
import axios from 'axios'
import Head from 'next/head';
import { ChampionshipResults } from '../src/components/ChampionshipResults/ChampionshipResults';
import { ComingUp } from '../src/components/ComingUp/ComingUp';
import { NextGp } from '../src/components/NextGp/NextGp'

export default function Home({ racesData, championshipData }: any) {
  console.log(championshipData)
  const today = new Date();

  const nextGp = racesData.MRData.RaceTable.Races.find((race: any) => {
    return new Date(race.date) >= today
  })

  const comingUpGps = racesData.MRData.RaceTable.Races.filter((race: any) => {
    return new Date(race.date) >= today
  })

  return (
    <>
      <Head>
        <title>F1 Championship App</title>
      </Head>
      <Stack component='main' spacing={6}>
        <NextGp nextGp={nextGp}/>
        <ComingUp comingUpGps={comingUpGps} />
        <ChampionshipResults driverStandings={championshipData.MRData.StandingsTable.StandingsLists[0].DriverStandings} />
      </Stack>
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  
  const racesResponse = await axios.get(`${API_URL}/current.json`);
  const racesData = await racesResponse.data;

  const championshipResponse = await axios.get(`${API_URL}/current/driverStandings.json`);
  const championshipData = await championshipResponse.data;

  return {
    props: {
      racesData,
      championshipData,
    }
  }
}