import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  export default function Card7() {
  return (
    <div className="w-60 h-60 rounded-xl">
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif"
        alt="Giphy"
        className="rounded-t-xl"
      />
      <div className="glass py-4 px-5 relative -top-[3.4rem] rounded-b-xl z-10">
        <h1 className="font-bold font-mono text-xl">
          Available soon
        </h1>
      </div>
    </div>
  )
}


}

export default App
