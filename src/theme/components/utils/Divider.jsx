const Divider = {
   styleOverrides: {
      root: ({ theme }) => ({
         height: 2,
         alignItems: 'center',
         backgroundColor: 'transparent',
         borderColor: 'gray',

         '&.MuiDivider-withChildren': {
            height: '0 !important',
            color: theme.palette.text.disabled,
            backgroundColor: 'transparent',
            fontWeight: 500,

            '&::before': {
               backgroundColor: 'gray',
            },
            '&::after': {
               backgroundColor: 'gray',
            },
         },
      }),
   },
};

export default Divider;
