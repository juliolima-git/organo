import './Banner.css'

export const Banner = () => {
  return (
    //Uso do Fragment (<></> ou <Fragment></Fragment>), para não ser obrigado a criar uma div para envolver um elemento. Utiliza-se <></>, essa tag não aparecerá no DOM
    <>
      <header className="banner">
        <img src="/imagens/banner.png" alt="Banner do organo"/>
      </header>
      <hr/>
    </>
  )
}

