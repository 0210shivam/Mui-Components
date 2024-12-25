import { Avatar, Chip } from "@mui/material"

export const LinkChip = ({ icon, title, active = false, onGo = () => { }, sx, props }) => {
   return (
      <Chip
         // disableRipple
         clickable
         onClick={onGo}
         {...props}
         sx={{
            ...sx,
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            scale: 1.15,
            // color: 'red',
            // borderColor: 'black'
            border: 'none',
            backgroundColor: active ? 'transparent' : 'white',
            boxShadow: active ? "none" : '1px 1px 1px 1px rgba(0,0,0,0.2)',
            '&:hover': {
               backgroundColor: active ? 'transparent !important' : 'white !important',
               boxShadow: active ? 'none' : '3px 3px 2px 1px rgba(0,0,0,0.2)',
               cursor: active ? 'default' : 'pointer',
            },
            '& .MuiChip-label': {
               whiteSpace: 'normal',
               fontFamily: 'Verdana',
               letterSpacing: 0.2,
               color: 'text.secondary'
            },
         }}
         avatar={<Avatar alt="Natacha" src={icon} />}
         label={title}
         variant="outlined"
      />
   )
}

export default LinkChip