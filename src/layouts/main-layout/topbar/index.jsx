import { AccountCircleOutlined, NotificationsOutlined, Search } from '@mui/icons-material'
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const TopBar = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   // Detect scroll and update state
   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 5);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <>
         <Stack
            height={50}
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            sx={{
               // border: '1px solid red',
               paddingX: 3.8,
               paddingY: 2,
               position: 'sticky',
               top: 5,
               borderRadius: 2,
               zIndex: 1,
               backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'transparent', // Change background color
               backdropFilter: isScrolled ? 'blur(10px)' : 'none', // Apply blur when scrolled
               WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none', // Safari support
               transition: 'background-color 0.3s, backdrop-filter 0.3s', // Smooth transition
               boxShadow: isScrolled ? '0px 0px 3px 3px rgba(0, 0, 0, 0.1)' : 'none'
            }}
         >
            <TextField
               sx={{ width: 296 }}
               placeholder='Search'
               margin='none'
               size='small'
               slotProps={{
                  input: {
                     startAdornment: (
                        <InputAdornment position="start">
                           <Search />
                        </InputAdornment>
                     ),
                  },
               }}
            />
            <Stack direction="row" spacing={1}>
               <IconButton>
                  <NotificationsOutlined />
               </IconButton>
               <IconButton>
                  <AccountCircleOutlined />
               </IconButton>
            </Stack>
         </Stack>
      </>
   )
}

export default TopBar