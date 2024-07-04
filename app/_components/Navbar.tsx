import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='nav'>
      <h3><Link href={"/"}>Moveez</Link></h3>
    </nav>
  )
}

export default Navbar;