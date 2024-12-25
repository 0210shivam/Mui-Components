const ListItemText = {
   styleOverrides: {
      root: ({ theme }) => ({
         // Root styles can go here
         color: theme.palette.text.secondary,
         fontSize: theme.typography.body1.fontSize,
         fontWeight: 500,
         // Change styles when the parent ListItemButton is selected
         ".MuiListItemButton-root.Mui-selected &": {
            color: 'blue', // New color when selected
            fontWeight: 700, // Bolder font weight
         },
      }),
   },
};

export default ListItemText;
