import { ButtonBase, Link, List, Stack } from '@mui/material'
import Image from '../../../components/global/Image'
import MagicQrLogo from '../../../assets/images/brand/magicqr-logo.png'
import sitemap from '../../../routes/sitemap';
import SideBarItems from './SideBarItems';

const DrawerItems = () => {
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
            {sitemap.map((route) => (
               <SideBarItems key={route.id} {...route} />
            ))}
         </List>
      </>
   )
}

export default DrawerItems