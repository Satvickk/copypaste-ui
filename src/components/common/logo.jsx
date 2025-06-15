import React from 'react'

const Logo = ({className}) => {
  return (
    <a
    href='/'
    className={`font-bold ${className}`}
    >Copy<span className="bg-black text-white px-1 ml-0.5">Paste</span> UI</a>
  )
}

export default Logo