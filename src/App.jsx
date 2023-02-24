import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {TryVite} from './components/TryVite/TryVite';
import { Home } from './components/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
