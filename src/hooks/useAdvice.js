import {useState, useEffect} from 'react'

const useAdvice = () => {
    const [advice, setAdvice] = useState('')
    useEffect(() => {
        try {
            const fetchAdvice = async () => {
                await fetch(`https://api.adviceslip.com/advice`)
                .then((res) => res.json())
                .then((data) => setAdvice(data.slip.advice))
            }
            setInterval(() => {
                fetchAdvice()
            }, 300);
        } catch (error) {
            console.log(error)
        }
    })
  return advice
}

export default useAdvice