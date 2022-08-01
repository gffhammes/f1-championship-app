import { Stack, Typography } from '@mui/material'
import React from 'react'

export interface IGpInfoProps {
  name: string;
  circuit: string;
  locality: string;
  country: string;
}

const primaryTextProps = {
  fontSize: 32,
  fontWeight: 600,
}

const secondaryTextProps = {
  sx: {
    opacity: .6,
  },
}

export const GpInfo = ({
  name,
  circuit,
  locality,
  country,
}: IGpInfoProps) => {
  return (
    <Stack sx={{ mt: 1, mb: 3, color: 'white' }}>
      <Typography {...primaryTextProps}>{name}</Typography>
      <Typography {...secondaryTextProps}>{circuit}</Typography>
      <Typography {...secondaryTextProps}>{locality} &bull; {country}</Typography>
    </Stack>
  )
}