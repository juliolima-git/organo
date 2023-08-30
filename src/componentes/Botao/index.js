import './Botao.css'

const Botao = (props) => {
  return (
    <button className='btn-formulario'>{props.children}</button>
  )
}

export default Botao