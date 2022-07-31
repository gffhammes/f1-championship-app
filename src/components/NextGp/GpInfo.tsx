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
    <Stack>
      <Typography fontSize={32} fontWeight={600}>{name}</Typography>
      <Typography>{circuit}</Typography>
      <Typography>{locality} &bull; {country}</Typography>
    </Stack>
  )
}