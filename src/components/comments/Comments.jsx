import { useContext } from 'react'
import { AuthContext } from '../../authContext';
import './comments.scss'

const Comments = () => {

  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
        id: 1,
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Autem neque ipsum dolor ipsum dolor sed diam non pro',
        name: 'John Doe',
        userId: 1,
        profilePicture: 'https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 2,
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Autem neque ipsum dolor ipsum dolor sed diam non pro',
        name: 'Jane Doe',
        userId: 2,
        profilePicture: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ]

  return (
    <div className='comments'>

        <div className="writeComment">
            <img src={currentUser.profilePicture} alt='' />
            <input type="text" placeholder='Escreva um comentario' />
            <button>Enviar</button>
        </div>
        {comments.map(comment => (
            <div className="comment" key={comment.id}>
                <img src={comment.profilePicture} alt='' />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <div className="date">
                    <span>30 min atras</span>
                </div>
            </div>
        ))}        
    </div>
  )
}

export default Comments