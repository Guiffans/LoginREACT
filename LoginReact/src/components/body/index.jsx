import './style.css'

export default function body(){

  return (
    <main>
       
      <div id='form'>
            
         <form action="" method="post">

          <label htmlFor="user" id='text'>Digite seu usuario</label><br />

          <div className='cx'>

            <input type="text" id="user" name="user" placeholder='usuario' required /><br />

            </div>
          <label htmlFor="senha" id='text'>Digite sua senha</label><br />

          <div className='cx'>

            <input type="password" id="senha" name="senha" placeholder='senha' required /><br />

          </div>

          <div id='butao'>

            <button type="submit" id="button" value="Confirmar">Confirmar</button>
            
          </div>

          </form>
            
        </div>
        
      </main>
    )
}   

