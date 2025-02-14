const scrollbar = (theme) => ({
   '@supports (-moz-appearance:none)': {
      scrollbarColor: `${theme.palette.grey[300]} transparent`,
   },
   '*::-webkit-scrollbar': {
      width: 5,
      height: 5,
      WebkitAppearance: 'none',
      backgroundColor: 'transparent',
      visibility: 'hidden',
   },
   '*::-webkit-scrollbar-track': {
      margin: 0,
   },
   '*::-webkit-scrollbar-thumb': {
      borderRadius: 3,
      backgroundColor: 'white',
      visibility: 'hidden',
   },
});

export default scrollbar;
