const Divider = {
   styleOverrides: {
      root: ({ theme }) => ({
         height: 1,
         alignItems: 'center',
         backgroundColor: 'gray',
         borderColor: 'gray',

         // '&.MuiDivider-withChildren': {
         //    height: '0 !important',
         //    color: theme.palette.text.disabled,
         //    backgroundColor: 'gray',
         //    fontWeight: 500,

         //    '&::before': {
         //       backgroundColor: 'gray',
         //    },
         //    '&::after': {
         //       backgroundColor: 'gray',
         //    },
         // },
      }),
   },
};

export default Divider;
