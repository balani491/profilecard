import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Card} from './components/Card.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name="Rahul" location="London" age="20" followers="80K" likes="803K" nopic="1.4K"></Card>
    </>
  )
}

export default App
