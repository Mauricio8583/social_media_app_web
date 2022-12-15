import { useContext } from 'react'
import { AuthContext } from '../../authContext'
import './stories.scss'

const Stories = () => {

   const { currentUser } = useContext(AuthContext)

   const storiesData = [
    {
        id: 1,
        name: 'John Doe',
        img: 'https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 2,
        name: 'John Doe',
        img: 'https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 3,
        name: 'John Doe',
        img: 'https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 4,
        name: 'John Doe',
        img: 'https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    
   ]

  return (
    <div className='stories'>
          <div className='story'>
                <img src={currentUser.profilePicture} alt='' />
                <span>{currentUser.name}</span>
                <button>+</button>                 
            </div>
        {storiesData.map(story => (
            <div className='story'key={story.id}>
                <img src={story.img} alt='' />
                <span>{story.name}</span>
                               
            </div>
        ))}
    </div>
  )
}

export default Stories