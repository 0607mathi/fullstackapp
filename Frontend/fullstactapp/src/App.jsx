import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [message,setMessage]=useState('')
  useEffect(()=>{
      axios.get('http://localhost:5000/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("Error fetching data:", error))
    },[])
  return (
    <>
      <h1>Full stack app</h1>
      <br />
      <div>
            <h1>Frontend with React + Vite</h1>
            <p>Message from backend: {message}</p>
        </div>
    </>
  )
}

export default App
