import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>
        <h1>Logo</h1>
      </Link>
      <div className='menu'>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
