import { Stack, Typography } from '@mui/material'
import React from 'react'

export interface IGpInfoProps {
  name: string;
  circuit: string;
  locality: string;
  country: string;
}

export const GpInfo = ({
  name,
  circuit,
  locality,
  country,
}: IGpInfoProps) => {
  return (
    <Stack sx={{ mt: 1, mb: 3 }}>
      <Typography fontSize={32} fontWeight={600}>{name}</Typography>
      <Typography sx={{ color: 'rgba(54, 54, 54, .6)' }} >{circuit}</Typography>
      <Typography sx={{ color: 'rgba(54, 54, 54, .6)' }} >{locality} &bull; {country}</Typography>
    </Stack>
  )
}