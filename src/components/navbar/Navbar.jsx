import { Link } from 'react-router-dom'
import './navbar.scss'
import HomeOutlined from '@mui/icons-material/HomeOutlined'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import GridViewOutlined from '@mui/icons-material/GridViewOutlined'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import PersonOutlined from '@mui/icons-material/PersonOutlined'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{textDecoration: "none"}}>
         <span>Social Media</span>
        </Link>
        <HomeOutlined />
        <DarkModeOutlined />
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder='Busca' />
        </div>
      </div>
      <div className='right'>
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
        <img src='https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}
