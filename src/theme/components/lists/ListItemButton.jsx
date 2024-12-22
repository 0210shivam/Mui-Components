const ListItemButton = {
   styleOverrides: {
      root: {
         borderRadius: 6,
         display: 'flex',
         justifyContent: 'center',
         minWidth: '100px',
         // alignItems: 'start',
         // backgroundColor: 'red',  // Set default background color to red
         '&:hover': {
            background: 'linear-gradient(140deg, rgb(16, 16, 16) 0%, rgb(167, 163, 163) 100%)',  // Change hover background color
            color: 'white',  // Change text color to black on hover
         }
      },
   }
}

export default ListItemButton;
