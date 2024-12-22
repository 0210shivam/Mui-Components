const Card = {
   styleOverrides: {
      root: {
         boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.1)',
         borderRadius: '16px',
         '&:hover': {
            cursor: 'pointer',
            boxShadow: '1px 1px 10px 3px rgba(0,0,0,0.1)',
         },
      }
   }
}

export default Card;