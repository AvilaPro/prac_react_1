import React from 'react'
import discipuladoImg from '../images/mariposa1.png'
import './styles/Card.css'

class Card extends React.Component {
  render(){
    return(
      <div className="card mx-auto Discipulos-Card" >
        <div className="card-body" >
          <div className="row center">
            <div className="col-6">
              <img src={discipuladoImg} className="float-right" id="Discipulos-img" />
            </div>
            <div className="col-6 Discipulos-Card-Info" >
              <h1>Guias Practicas</h1>
              <p>Aprende las practicas fundamentales del discipulo</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card