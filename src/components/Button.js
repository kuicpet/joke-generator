import React from 'react'

const Button = ({generateJoke, children}) => {
    return (
        <button onClick={generateJoke}>
            {children}
        </button>
    )
}

export default Button
