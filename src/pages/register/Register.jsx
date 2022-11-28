import './register.scss'

export const Register = () => {
  return (
    <div className='register'>
        <div className='card'>
            <div className='left'>
                <h1>Bem Vindo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Possimus rem labore praesentium fugiat voluptas? Ducimus, excepturi accusantium saepe, 
                delectus incidunt commodi obcaecati quae quam perferendis esse debitis, optio aspernatur rem.</p>
                <span>Já tem uma conta?</span>
                <button>Login</button>
            </div>
            <div className='right'>
                <h1>Cadastro</h1>
                <form>
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='E-mail' />
                    <input type="password" placeholder='Senha' />
                    <input type="text" placeholder='Nome' />
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
    </div>
  )
}
