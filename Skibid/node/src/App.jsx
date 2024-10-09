import { viteState } from 'react'
import './style.css'

function MyForm(){
  return (
    <form>
      <div id='centro'>
      <label> 
      <h1> Faça seu login</h1>
      </label>
      <br /><br />
      <label>Seu e-mail:      
      </label>
      <input id='box' type="text"/>   
<br /><br />
      <label>
        Sua senha:
      </label>
      <input id='box' type="password" />
<br /><br />

      <label>
        <input type="checkbox" />
        Lembrar-me
        </label>

<br /><br />
    <button id='botao'>Entrar</button>

<br /><br />

    <label>
      Esqueceu sua senha? <a href="https://www.youtube.com/watch?v=pwImFrAx6n0" target='_blank'>Click aqui</a>
    </label>
<br />
    </div>
    </form>
  )
}

export default MyForm
