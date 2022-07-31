import { Box } from '@mui/material'
import Image from 'next/image';
import React from 'react'

type Props = {
  countryName: string;
}

export const CountryFlag = ({ countryName }: Props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '5rem',
        width: '5rem',
        borderRadius: 1
      }}
    >
      <Image
        src={`https://countryflagsapi.com/png/${countryName}`}
        alt={countryName}
        layout='fill'
        objectFit='cover'
        style={{
          borderRadius: '.5rem'
        }}
      />
    </Box>
  )
}