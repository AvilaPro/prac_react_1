import React from 'react'
import discipuladoImg from '../images/mariposa1.png'
import circlesImg from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component {
  render(){
    const { title, description, img, leftColor, rightColor } = this.props
    return (
      <div className="card mx-auto Discipulos-Card" 
      style={{ 
        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`,

       }} 
      >
        <div className="card-body" >
          <div className="row center">
            <div className="col-6">
              <img src={img} className="float-right" id="Discipulos-img" />
            </div>
            <div className="col-6 Discipulos-Card-Info" >
              <h1>{title}</h1>
              <p>{description} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card