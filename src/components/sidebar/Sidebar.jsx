import { Box, Drawer } from "@mui/material"
import DrawerItems from "./DrawerItems"

const Sidebar = () => {
   return (
      <Box
         component="nav"
         width={{ lg: 290 }}
         flexShrink={{ lg: 0 }}
         display={{ xs: 'none', lg: 'block' }}
      >
         <Drawer
            variant="temporary"
            // open={mobileOpen}
            // onTransitionEnd={handleDrawerTransitionEnd}
            // onClose={handleDrawerClose}
            ModalProps={{ keepMounted: true }}
            sx={{ display: { xs: 'block', lg: 'none' } }}
         >
            <DrawerItems />
         </Drawer>

         <Drawer variant="permanent" sx={{ display: { xs: 'none', lg: 'block' } }} open>
            <DrawerItems />
         </Drawer>
      </Box>
   )
}

export default Sidebar