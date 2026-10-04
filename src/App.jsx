import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Button from './components/Button/Button'
import StudentsList from './components/StudentsList/StudentsList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hellow World! </h1>
      <Button></Button>
      <Button></Button>


      <StudentsList></StudentsList>
    </>
  )
}

export default App
