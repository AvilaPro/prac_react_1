import React from 'react'
import discipuladoImg from '../images/mariposa1.png'

class Card extends React.Component {
  render(){
    return(
      <div>
        <div>
          <img src={discipuladoImg} />
        </div>
        <div>
          <h1>Guias Practicas</h1>
          <p>Aprende las practicas fundamentales del discipulo</p>
        </div>
      </div>
    )
  }
}

export default Card