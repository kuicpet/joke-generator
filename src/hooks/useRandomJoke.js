import { useEffect, useState } from 'react'

function useRandomJoke(firstName, lastName) {
  const [joke, setJoke] = useState('')
  useEffect(() => {
    try {
      const fetchJoke = async () => {
        await fetch(
          `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
        )
          .then((res) => res.json())
          .then((data) => setJoke(data.value.joke))
      }
      fetchJoke()
    } catch (error) {
      console.log(error)
    }
  }, [firstName, lastName])

  return joke
}

export default useRandomJoke
