import { useRef, useState } from 'react'
import './App.css'
import useRandomJoke from './useRandomJoke'
import styled from 'styled-components'

function App() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  const [firstName, setFirstName] = useState('Kingsley')
  const [lastName, setLastName] = useState('Umujeyan')

  const joke = useRandomJoke(firstName, lastName)

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
        <button onClick={generateJoke}>Generate a Joke</button>
      </form>
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
      width: 100%;
      margin: 0.25rem 0;
      padding: 0.5rem;
      font-size: 1.1rem;
      border: 1px solid blue;
    }
    button {
      width: 100%;
      margin: 0.5rem 0;
      font-size: 1.3rem;
      padding: 0.5rem;
      color: white;
      background-color: blue;
      border: none;
      outline: none;
    }
  }
  @media screen and (min-width: 800px) {
    form {
      width: 50%;
    }
  }
`

export default App
