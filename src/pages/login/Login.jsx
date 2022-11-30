import { Link } from 'react-router-dom'
import './login.scss'

export const Login = () => {
  return (
    <div className='login'>
        <div className='card'>
            <div className='left'>
                <h1>Bem Vindo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Possimus rem labore praesentium fugiat voluptas? Ducimus, excepturi accusantium saepe, 
                delectus incidunt commodi obcaecati quae quam perferendis esse debitis, optio aspernatur rem.</p>
                <span>Ainda não tem uma conta?</span>
                <Link to="/register"><button>Cadastre-se</button></Link>
            </div>
            <div className='right'>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Senha' />
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
