import axios from "axios"
import React, { useEffect, useState } from "react"
import "./App.css"

const App = () => {
  const [message, setMessage] = useState("")

  const fetchHello = async () => {
    const { data } = await axios.post("/.netlify/functions/hello", {
      name: "codingwithdidem",
    })
    setMessage(data.message)
  }

  useEffect(() => {
    fetchHello()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{message}</p>
      </header>
    </div>
  )
}

export default App
