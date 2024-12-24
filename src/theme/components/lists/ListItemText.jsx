const ListItemText = {
   styleOverrides: {
      root: ({ theme }) => ({
         // Root styles can go here
         color: theme.palette.text.secondary,
         fontSize: theme.typography.body1.fontSize,
         fontWeight: 500,
         // Change styles when the parent ListItemButton is selected
         ".MuiListItemButton-root.Mui-selected &": {
            color: theme.palette.text.secondary, // New color when selected
            fontWeight: 600, // Bolder font weight
         },
      }),
   },
};

export default ListItemText;
