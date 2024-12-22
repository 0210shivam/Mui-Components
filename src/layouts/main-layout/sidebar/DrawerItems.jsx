import { ButtonBase, Link, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import Image from '../../../components/global/Image'
import MagicQrLogo from '../../../assets/images/brand/magicqr-logo.png'
import { ContactMail, Home, Info } from '@mui/icons-material';

const DrawerItems = () => {
   const drawerItems = [
      { text: 'Dashboard', icon: <Home />, link: '/' },
      { text: 'About', icon: <Info />, link: '/about' },
      { text: 'Contact', icon: <ContactMail />, link: '/contact' },
      { text: 'Home', icon: <Home />, link: '/' },
      { text: 'About', icon: <Info />, link: '/about' },
      { text: 'Contact', icon: <ContactMail />, link: '/contact' },
   ];

   return (
      <>
         <Stack
            justifyContent="flex-start"
            position="sticky"
            top={0}
            pt={2.5}
            pb={2.5}
            borderColor="info.main"
            bgcolor="info.lighter"
            zIndex={1000}
         >
            <ButtonBase component={Link} href="/" disableRipple>
               <Image src={MagicQrLogo} alt="logo" height={80} sx={{ mr: 3.5 }} />
            </ButtonBase>
         </Stack>
         <List sx={{ mt: 3, mb: 10, p: 0, pl: 3 }}>
            {drawerItems.map((item, index) => (
               <ListItemButton
                  key={item.text}
               >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                     primary={item.text}
                     sx={{
                        '& .MuiListItemText-primary': {
                           // color: active ? 'primary.main' : null,
                           // fontWeight: active ? 600 : 500,
                           // color: 'blue',
                           fontWeight: 600
                        },
                     }}
                  />
               </ListItemButton>
            ))}
         </List>
      </>
   )
}

export default DrawerItems