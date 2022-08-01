import { Box } from '@mui/material'
import axios from 'axios'
import Head from 'next/head';
import { NextGp } from '../src/components/NextGp/NextGp'

export default function Home({ data }: any) {
  // console.log(data.MRData.RaceTable)
  const today = new Date();

  const nextGp = data.MRData.RaceTable.Races.find((race: any) => {
    return new Date(race.date) >= today
  })

  return (
    <>
      <Head>
        <title>F1 Championship App</title>
      </Head>
      <Box component='main' sx={{ py: 5 }}>
        <NextGp nextGp={nextGp}/>
      </Box>
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