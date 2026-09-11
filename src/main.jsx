import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import './index.css'
import App from './App.jsx'

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
