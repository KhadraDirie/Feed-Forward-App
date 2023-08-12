import React from 'react'


export default function Nav() {
  return (
    
<nav className="bg-white p-5">
  <ul className="flex space-x-6">
    <li>
      <a className="text-brown-300 hover:text-brown-200 text-xl font-semibold" href="/">Home</a>
    </li>
    <li>
      <a className="text-brown-300 hover:text-brown-200 text-xl font-semibold" href="#about">About Us</a>
    </li>
    <li>
      <a className="text-brown-300 hover:text-brown-200 text-xl font-semibold" href="/donate">Donate Food</a>
    </li>
    <li>
      <a className="text-brown-300 hover:text-brown-200 text-xl font-semibold" href="/partners">Partners</a>
    </li>
    <li>
      <a className="text-brown-300 hover:text-brown-200 text-xl font-semibold" href="/contact">Contact</a>
    </li>
  </ul>
</nav>

    
  )
}




