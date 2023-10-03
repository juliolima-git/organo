import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <ul className='lista-redes'>
                <li><img src='./imagens/fb.png'/></li>
                <li><img src='./imagens/tw.png'/></li>
                <li><img src='./imagens/ig.png'/></li>
            </ul>
            <img src='./imagens/logo.png'/>
            <p>Desenvolvido por Julio Lima.</p>
        </footer>
    )
}

export default Rodape