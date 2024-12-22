import { Box, Drawer } from '@mui/material'
import DrawerItems from './DrawerItems';

const SideBar = () => {

   return (
      <>
         <Box
            component="nav"
            width={{ lg: 290 }}
            display={{ xs: 'none', lg: 'block' }}
         >
            <Drawer
               variant="permanent"
               sx={{ flex: 1, width: 1, height: 1, backgroundColor: 'transparent' }}
               open
            >
               <DrawerItems />
            </Drawer>
         </Box>
      </>
   )
}

export default SideBar