import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

export const SectionTitle = ({ children }: Props) => {
  return (
    <Typography fontSize={10} fontWeight={600} sx={{ color: 'rgba(54, 54, 54, 0.6)', mb: 2 }}>{children?.toString().toUpperCase()}</Typography>
  )
}