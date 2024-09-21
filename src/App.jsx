import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen min-h-screen flex flex-col 
    '>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
      </Routes>

    </div>
  )
}

export default App
