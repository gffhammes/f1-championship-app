import { Box, Typography } from '@mui/material'
import React from 'react'
import { getFormattedDate } from '../../../helpers/getFormattedDate';

interface ISectionCardProps {
  data: {    
    label: string;
    date: string;
    time: string;
  },
  emphasis?: boolean;
}

const sxCardWrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '5rem',
  width: '7rem',
  p: 1,
  borderRadius: 2,
  backgroundColor: '#E9E9E9',
  color: '#363636',
}

const sxCardWrapperEmphasis = {
  ...sxCardWrapper,
  backgroundColor: '#EE0000',
  color: '#fff',
}

export const SectionCard = ({
  data: {
    label,
    date,
    time,
  },
  emphasis = false,
}: ISectionCardProps) => {
  const { formattedDate, formattedTime } = getFormattedDate(date, time);

  return (
    <Box sx={emphasis ? sxCardWrapperEmphasis : sxCardWrapper}>
      <Typography sx={{ opacity: '.6' }} fontSize={10}>{label.toUpperCase()}</Typography>
      <Typography sx={{ mt: 'auto' }} fontSize={12}>{formattedDate}</Typography>
      <Typography fontSize={16} fontWeight={600}>{formattedTime}</Typography>
    </Box>
  )
}