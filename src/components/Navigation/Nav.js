import React from 'react'

export default function Nav() {
  return (
    
    <nav className="bg-green-500 p-4 justify">
      <ul className="flex space-x-4">
        <li>
          <a className="text-white hover:text-gray-200 text-lg font-bold" href="/">Home</a>
        </li>
        <li>
          <a className="text-white hover:text-gray-200 text-lg font-bold" href="/about">About</a>
        </li>
        <li>
          <a className="text-white hover:text-gray-200 text-lg font-bold" href="/contact">Donate Food</a>
        </li>
        <li>
          <a className="text-white hover:text-gray-200 text-lg font-bold" href="/contact">Partner Organization</a>
        </li>
        <li>
          <a className="text-white hover:text-gray-200 text-lg font-bold" href="/contact">Contact</a>
        </li>

      </ul>
    </nav>
    
  )
}




