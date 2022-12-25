import { Link } from 'react-router-dom'
import './register.scss'
import { useState } from 'react'
import axios from 'axios'

export const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();

    try{
        await axios.post("http://localhost:4000/api/auth/register", {
            username,
            email,
            password,
            name
        } );

    }catch(err){
        setErr(err);
    }
  }

  return (
    <div className='register'>
        <div className='card'>
            <div className='left'>
                <h1>Bem Vindo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Possimus rem labore praesentium fugiat voluptas? Ducimus, excepturi accusantium saepe, 
                delectus incidunt commodi obcaecati quae quam perferendis esse debitis, optio aspernatur rem.</p>
                <span>Já tem uma conta?</span>
                <Link to="/login"><button>Login</button></Link>
            </div>
            <div className='right'>
                <h1>Cadastro</h1>
                <form>
                    <input type="text" placeholder='Username' name='username' onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder='E-mail' name='email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Senha' name='pass' onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" placeholder='Nome' name='name' onChange={(e) => setName(e.target.value)} />
                    {err && err}
                    <button onClick={handleClick}>Cadastrar</button>
                </form>
            </div>
        </div>
    </div>
  )
}
