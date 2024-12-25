const ListItemButton = {
   styleOverrides: {
      root: ({ theme }) => ({
         color: theme.palette.text.disabled,
         padding: 20,
         borderRadius: theme.shape.borderRadius * 1.25,
         transition: 'all 0.3s ease', // Smooth transition for hover effect

         '&:hover': {
            borderRadiud: 12,
            marginRight: 12,
            backgroundColor: 'rgba(79, 78, 78, 0.09)', // Semi-transparent white background
         },

         // Glass effect for hover
         '&.Mui-selected': {
            background: 'white', // Semi-transparent white background
            // backdropFilter: 'blur(5px)', // Blur effect for the background
            borderRadius: 10, // Maintain border radius
            marginRight: 12,
            boxShadow: `3px 2px 2px 1px rgba(117, 127, 139, 0.1)`, // Optional: Add subtle shadow for depth
         },

         '&.Mui-selected:hover': {
            background: 'white', // Semi-transparent white background
            // backdropFilter: 'blur(5px)', // Blur effect for the background
            borderRadius: 10, // Maintain border radius
            marginRight: 12,
            boxShadow: `3px 2px 2px 1px rgba(117, 127, 139, 0.1)`, // Optional: Add subtle shadow for depth
         },
      }),
   },
};

export default ListItemButton;
