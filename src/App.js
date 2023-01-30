
import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('')

  const numberOfRender = useRef(0)

  const handleChnage = (e) => {
    setInput(e.target.value)
    numberOfRender.current++
  }

  const inputRef = useRef()
  const focusOn = () => {
    inputRef.current.focus()
  }


  const [inputTwo, setInputTwo] = useState('')

  const [second, setSecond] = useState(0)

  const numberOfRenderTwo = useRef(0)

  const timer = useRef()

  const handleChnageTwo = (e) => {
    setInputTwo(e.target.value)
    numberOfRenderTwo.current++
  }

  const startTimer = () => {
    timer.current = setInterval(() => {
      numberOfRenderTwo.current++
      setSecond(prev => prev + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(timer.current)
    timer.current = 0
  }

  const resetTimer = () => {
    stopTimer()
    if (second) {
      numberOfRenderTwo.current++
      setSecond(0)
    }
  }

  return (
    <div>
      <div>
        <p>
          <ul>
            <li>
              The useRef Hook allows you to persist values between renders.
            </li>
            <li>
              It can be used to store a mutable value that does not cause a re-render when updated.
            </li>
            <li>
              It can be used to access a DOM element directly.
            </li>
            <li>
              Setting focus is the prime example of useRef, else use useState
            </li>
          </ul>
        </p>
      </div>
      <div className="App">
        <input
          ref={inputRef} // mounted with const inputRef = useRef()
          type='text'
          value={input}
          placeholder='Any Text'
          onChange={handleChnage}
        />
        <br />
        <br />
        <button onClick={focusOn}>Focus</button>
        <br />
        <p>
          Number of Render: {numberOfRender.current}
        </p>
      </div>
      <div className="App">
        <input
          type='text'
          value={inputTwo}
          placeholder='Any Text'
          onChange={handleChnageTwo}
        />
        <br />
        <br />
        <button onClick={startTimer}>startTimer</button>
        <button onClick={stopTimer}>stopTimer</button>
        <button onClick={resetTimer}>resetTimer</button>
        <br />
        <p>
          Number of Render: {numberOfRenderTwo.current}
        </p>
        <br />
        Second: {second}
        <br />
      </div>

    </div>
  )
}

export default App
