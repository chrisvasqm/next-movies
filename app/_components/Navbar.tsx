import { PlusIcon } from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';
import Link from 'next/link';

function Navbar() {
  return (
    <nav style={{ boxShadow: '0 0 3px 1px' }}>
      <Flex style={{ paddingLeft: '10px', height: '60px' }} direction={'row'} align={'center'} gap='5'>
        <h3><Link href={'/'}>Moveez</Link></h3>
        <Link href={'/movies/new'}>
          <IconButton>
            <PlusIcon width="18" height="18" />
          </IconButton>
        </Link>
      </Flex>
    </nav>
  )
}

export default Navbar;