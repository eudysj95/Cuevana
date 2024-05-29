// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import { Router } from './router/Router';

function App() {

  return (
    <div className='bg-[#F6F7F9] flex flex-col min-h-screen'>
      <Router/>
    </div>
  )
}

export default App
