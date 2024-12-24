import { IconButton, Stack } from '@mui/material'
import React from 'react'
import { ContainedButton, OutlinedButton } from '../../../theme/components/buttons'
import { ListOutlined } from '@mui/icons-material'

const ActionButtons = () => {
   return (
      <>
         <Stack display={{ xs: 'none', lg: 'flex' }} direction="row" spacing={2}>
            <OutlinedButton variant="outlined" color="primary">Add</OutlinedButton>
            <OutlinedButton variant="outlined" color="primary">View</OutlinedButton>
            <OutlinedButton variant="outlined" color="primary">Edit</OutlinedButton>
         </Stack>

         <Stack display={{ xs: 'flex', lg: 'none' }} direction="row" spacing={2}>
            <IconButton>
               <ListOutlined />
            </IconButton>
         </Stack>
      </>
   )
}

export default ActionButtons