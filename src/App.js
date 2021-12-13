import React from 'react'
import Header from './components/Header'
import Data from './components/Data'
import State from './components/State'
import End from './components/End'
import "./App.css"

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Data />
      <State />
      <End />
    </div>
  )
}

export default App
