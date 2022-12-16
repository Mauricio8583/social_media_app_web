import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import './profile.scss'
import Posts from '../../components/posts/Posts'

export const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src='https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='cover' />
        <img src='https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='profilePicture' />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href='http://facebook.com'>
              <FacebookTwoToneIcon fontSize='large' />
            </a>
            <a href='http://instagram.com'>
              <InstagramIcon fontSize='large' />
            </a>
            <a href='http://twitter.com'>
              <TwitterIcon fontSize='large' />
            </a>
            <a href='http://linkedin.com'>
              <LinkedInIcon fontSize='large' />
            </a>
            <a href='http://pinterest.com'>
              <PinterestIcon fontSize='large' />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>English</span>
              </div>
              
            </div>
            <button>Seguir</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        
      </div>
      <div className='posts'>
       <Posts />
      </div>      
    </div>
  )
}
