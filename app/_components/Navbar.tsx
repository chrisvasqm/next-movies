import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav style={{ boxShadow: '0 0 3px 1px' }}>
      <Flex style={{ paddingLeft: '10px', height: '60px' }} direction={'row'} align={'center'}>
        <h3><Link href={'/'}>Moveez</Link></h3>
      </Flex>
    </nav>
  )
}

export default Navbar;