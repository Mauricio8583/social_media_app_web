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
                <span>Já tem uma conta?</span>
                <button>Register</button>
            </div>
            <div className='right'>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
