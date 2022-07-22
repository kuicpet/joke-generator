import { useRef, useState } from 'react'
import './App.css'
import useRandomJoke from './hooks/useRandomJoke'
import styled from 'styled-components'
import Button from './components/Button'
import useAdvice from './hooks/useAdvice'

function App() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  const [firstName, setFirstName] = useState('Kingsley')
  const [lastName, setLastName] = useState('Umujeyan')

  const joke = useRandomJoke(firstName, lastName)
  const advice = useAdvice()

  const generateJoke = (e) => {
    e.preventDefault()
    setFirstName(firstNameRef.current.value)
    setLastName(lastNameRef.current.value)
  }
  return (
    <Container>
      <h1>Joke Generator</h1>
      <h2>{joke}</h2>
      <form>
        <input
          placeholder='first name'
          ref={firstNameRef}
          // value={firstName}
          // onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder='last name'
          ref={lastNameRef}
          // value={lastName}
          // onChange={(e) => setLastName(e.target.value)}
        />
        {/*<button onClick={generateJoke}>Generate a Joke</button>*/}
        <Button generateJoke={generateJoke}>Generate a Joke</Button>
      </form>
      <div>
        <p>Advice for Today</p>
        <h2>{advice}</h2>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    border-bottom: 2px solid gray;
    padding: 0.25rem;
  }
  h2 {
    font-weight: 400;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 1rem;
    input {
      width: 75%;
      margin: 0.25rem 0;
      padding: 0.5rem;
      font-size: 1.1rem;
      border: 1px solid blue;
    }
    button {
      width: 50%;
      margin: 0.5rem 0;
      font-size: 1.3rem;
      padding: 0.5rem;
      color: white;
      background-color: black;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 10px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.85);
      }
    }
  }
  @media screen and (min-width: 800px) {
    form {
      width: 50%;
    }
  }
`

export default App
