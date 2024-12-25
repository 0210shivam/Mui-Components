import { Box } from '@mui/material'
import React from 'react'

const Image = ({ sx, src, ...rest }) => {
   return <Box component="img" src={src} sx={sx} {...rest} />
}

export default Image