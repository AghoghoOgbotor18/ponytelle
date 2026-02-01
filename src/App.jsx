import React from 'react'
import AppRoute from './routes/AppRoute'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}

export default App
