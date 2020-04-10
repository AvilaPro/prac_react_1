import React from 'react'
import discipuladoImg from '../images/mariposa1.png'
import circlesImg from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      image: 'https://firebasestorage.googleapis.com/v0/b/discipulados-react.appspot.com/o/perro_sf.png?alt=media&token=bc64cec4-05b9-4b87-89b8-297ac7b43b6a'
    }
  }

  componentDidMount( ){
    setTimeout(() => {
      this.setState({
        image: 'https://firebasestorage.googleapis.com/v0/b/discipulados-react.appspot.com/o/mariposa%20copy.png?alt=media&token=c9d15a6b-559d-4940-8d5a-8f9f27beddc5'
      })
    }, 5000)
  }
  
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
              <img src={this.state.image} className="float-right" id="Discipulos-img" />
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