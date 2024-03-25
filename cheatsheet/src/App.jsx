import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTabs from './components/MyTabs'

function App() {

  return (
    <>
      <div className='App'>
        <h1>Hello World</h1>

        <div className='block'>
          <MyTabs/>
        </div>
    
      </div>
      
    </>
  )
}

export default App;
