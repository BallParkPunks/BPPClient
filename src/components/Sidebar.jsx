import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav>
      <ul>

        <li>
          <Link to={'/'}>Home</Link>
        </li>

        <li>
          <Link to={'personal'}>Personal</Link>
        </li>

      </ul>
    </nav>
  )
}