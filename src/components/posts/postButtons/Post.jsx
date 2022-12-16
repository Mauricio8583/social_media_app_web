import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import './post.scss'
import { Link } from 'react-router-dom'
import Comments from '../../comments/Comments'
import { useState } from 'react'

const Post = ({post}) => {

  const [openComment, setOpenComment] = useState(false);

  const liked = false; //Temporary

  return (
    <div className='post'>
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePicture} alt='' />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration: 'none', color: 'inherit'}}>
                        <span className='name'>{post.name}</span>
                                                           
                    </Link>
                    <span className='date'>1 min atras</span>
                </div>
            </div>
            <MoreHorizIcon />
        </div>
        <div className="content">
            {post.desc}
            <img src={post.img} alt='' />
        </div>
        <div className="info">
            <div className="item">
                {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                10 likes
            </div>
            <div className="item" onClick={() => setOpenComment(!openComment)}>
                <TextsmsOutlinedIcon />
                10 comentarios
            </div>
            <div className="item">
                <ShareOutlinedIcon />
                compartilhar
            </div>
        </div>
        {openComment && <Comments />}
        </div>
    </div>
  )
}

export default Post