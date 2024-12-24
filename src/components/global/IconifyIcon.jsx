import { Box } from "@mui/material"
import { Icon } from '@iconify/react';

const IconifyIcon = ({ icon, ...props }) => {
   return <Box component={Icon} icon={icon} {...props} />
}

export default IconifyIcon;