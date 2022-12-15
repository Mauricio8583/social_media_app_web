import Post from './postButtons/Post'
import './posts.scss'

const Posts = () => {

  const postData = [
    {
      id: 1,
      name: 'John Doe',
      userId: 1,
      profilePicture: 'https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      img: 'https://images.pexels.com/photos/12032341/pexels-photo-12032341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id: 2,
      name: 'Jane Doe',
      userId: 2,
      profilePicture: 'https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit'
      
    }
  ]

  return (
    <div className='posts'>
        {postData.map(post => (
          <Post post={post} key={post.id} />
        ))}
    </div>
  )
}

export default Posts