import { List } from '@mui/material'
import React from 'react'
import SideBarListItem from './SideBarListItem'

const DrawerItems = () => {
   return (
      <div>
         <List component="nav" sx={{ mt: 2.5, mb: 10, p: 0, pl: 3 }}>
            <SideBarListItem />
            <SideBarListItem />
            <SideBarListItem />
            <SideBarListItem />
            <SideBarListItem />
            <SideBarListItem />
         </List>
      </div>
   )
}

export default DrawerItems