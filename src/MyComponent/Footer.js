import React from 'react'

export const Footer = () => {
  let footerStyle = {
    border: "3px solid red"
  }
  return (
    <footer className='bg-dark text-light my-5 py-2'style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; MyTodosList.com
      </p>

    </footer>

  )
}
