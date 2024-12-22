import { Home } from '@mui/icons-material'
import { Box, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

const SideBarListItem = () => {
   return (
      <div>
         <Stack mb={1} alignItems="center" justifyContent="space-between">
            <ListItemButton>
               <ListItemIcon>
                  <Home />
               </ListItemIcon>
               <ListItemText
                  primary="Dashboard"
                  // sx={{
                  //    '& .MuiListItemText-primary': {
                  //       color: active ? 'primary.main' : null,
                  //       fontWeight: active ? 600 : 500,
                  //    },
                  // }}
               />
            </ListItemButton>

            <Box
               height={36}
               width={4}
               borderRadius={10}
               // bgcolor={active && path === '/' ? 'primary.main' : 'transparent'}
            />
         </Stack>
      </div>
   )
}

export default SideBarListItem