import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Greet } from './components/greet/greet'
import { Application } from './components/application/application'
import { AppProviders } from './providers/AppProviders'
import { MuiMode } from './components/mui/MuiMode'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
