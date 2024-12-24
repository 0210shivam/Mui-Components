import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme/theme.js'
import Test from './components/Test.jsx'
import MainLayout from './layouts/main-layout/index.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>,
)
