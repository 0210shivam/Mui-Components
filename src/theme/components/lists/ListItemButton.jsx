const ListItemButton = {
   styleOverrides: {
      root: ({ theme }) => ({
         color: theme.palette.text.disabled,
         padding: theme.spacing(0.875, 1.25),
         borderRadius: theme.shape.borderRadius * 1.25,
         transition: 'all 0.3s ease', // Smooth transition for hover effect

         // Glass effect for hover
         '&.Mui-selected': {
            background: 'rgba(136, 186, 255, 0.2)', // Semi-transparent white background
            backdropFilter: 'blur(5px)', // Blur effect for the background
            borderRadius: 10, // Maintain border radius
            marginRight: 2,
            boxShadow: `0 0px 2px 2px rgba(117, 127, 139, 0.1)`, // Optional: Add subtle shadow for depth
         },
      }),
   },
};

export default ListItemButton;
