import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

const BreadCrumbsContainer = () => {
   return (
      <Breadcrumbs maxItems={4} aria-label="breadcrumb">
         <Typography sx={{ color: 'text.secondary', fontSize: '14px' }} variant="subtitle" component={Link} underline="hover" href="/">
            MUI
         </Typography>
         <Typography
            component={Link}
            sx={{ color: 'text.secondary', fontSize: '14px' }}
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
         >
            Core
         </Typography>
         <Typography sx={{ color: 'text.primary', fontSize: '14px' }}>Breadcrumbs</Typography>
      </Breadcrumbs>
   )
}

export default BreadCrumbsContainer