import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import IconifyIcon from '../../../components/global/IconifyIcon'
import { useLocation } from 'react-router';
import { useRouter } from '../../../routes/hooks';

const SideBarItems = ({ title, icon, path }) => {
   const pathName = useLocation();
   const router = useRouter();
   const active = pathName.pathname === path;

   return (
      <div>
         <ListItemButton onClick={() => router.push(path)} selected={active} sx={{ padding: 0.6 }}>
            <ListItemIcon>
               {icon && (
                  <IconifyIcon
                     icon={icon}
                     fontSize="h5.fontSize"
                     sx={{
                        color: active ? 'primary.main' : null,
                     }}
                  />
               )}
            </ListItemIcon>
            <ListItemText
               primary={title}
               sx={{
                  '& .MuiListItemText-primary': {
                     color: active ? 'primary.main' : null,
                     fontWeight: active ? 600 : 500,
                     // color: 'blue',
                     // fontWeight: 600
                  },
               }}
            />
         </ListItemButton>
      </div>
   )
}

export default SideBarItems