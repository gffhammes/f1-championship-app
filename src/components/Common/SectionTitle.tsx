import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

export const SectionTitle = ({ children }: Props) => {
  return (
    <Typography>{children?.toString().toUpperCase()}</Typography>
  )
}