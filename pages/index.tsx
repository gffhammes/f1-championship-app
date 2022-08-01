import { Box, Stack } from '@mui/material'
import axios from 'axios'
import Head from 'next/head';
import { ComingUp } from '../src/components/ComingUp/ComingUp';
import { NextGp } from '../src/components/NextGp/NextGp'

export default function Home({ data }: any) {
  // console.log(data.MRData.RaceTable)
  const today = new Date();

  const nextGp = data.MRData.RaceTable.Races.find((race: any) => {
    return new Date(race.date) >= today
  })

  const comingUpGps = data.MRData.RaceTable.Races.filter((race: any) => {
    return new Date(race.date) >= today
  })

  return (
    <>
      <Head>
        <title>F1 Championship App</title>
      </Head>
      <Stack component='main' spacing={4}>
        <NextGp nextGp={nextGp}/>
        <ComingUp comingUpGps={comingUpGps} />
      </Stack>
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  
  const response = await axios.get(`${API_URL}/current.json`)
  const data = await response.data

  return {
    props: {
      data: data,
    }
  }
}