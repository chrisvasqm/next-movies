import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav style={{ boxShadow: '0 0 3px 1px' }}>
      <Flex style={{ paddingLeft: '10px', height: '60px' }} direction={'row'} align={'center'}>
        <h3><Link href={'/'}>Moveez</Link></h3>

        <Link href={'/catalog'} style={{ height: '100%' }}>
          <Button style={{ marginLeft: 20, fontWeight: 'bold', height: '100%' }} variant='ghost'>
            Catalog
          </Button>
        </Link>
      </Flex>
    </nav>
  )
}

export default Navbar;