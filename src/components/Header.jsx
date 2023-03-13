import { Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <ul>

        <li>
          <Link as={RouterLink} to='/'>Home</Link>
        </li>

        <li>
          <Link as={RouterLink} to='/personal'>Personal</Link>
        </li>

      </ul>
    </nav>
  )
}