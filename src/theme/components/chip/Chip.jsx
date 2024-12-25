const Chip = {
   styleOverrides: {
      root: {
         "&:hover": {
            backgroundColor: "white",
            boxShadow: "3px 3px 2px 1px rgba(0,0,0,0.2)",
         },
      },
      clickable: {
         "&:hover": {
            backgroundColor: "lightblue", // Custom hover background
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Custom hover shadow
         },
      },
   }
}

export default Chip;