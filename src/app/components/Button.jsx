import React from 'react'
import '../styles/Button.scss'

const Button = ({text}) => {
  return (
    <>
    <button className='my_button'>
        {text}
    </button>
    </>
  )
}

export default Button