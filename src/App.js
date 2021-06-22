import React from 'react'
import Header from './Header'
import Data from './Data'
import State from './State'
import End from './End'
import './App.css'




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
