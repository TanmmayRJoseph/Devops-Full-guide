import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [quote, setQuote] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/quote')
      .then(response => {
        setQuote(response.data.quote)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{quote}</h1>
    </>
  )
}

export default App
