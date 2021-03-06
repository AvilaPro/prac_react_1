//Forma antigua de insertar elementos dentro del HTML
/* const element = document.createElement('h1')
element.innerText = 'Hello React'
const container = document.getElementById('root')
container.appendChild(element) */

//Forma de usar React

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('root')

//ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(<Card
                  title="Mi titulo"
                  description="Aprende las practicas fundamentales del discipulo"
                  img="https://firebasestorage.googleapis.com/v0/b/discipulados-react.appspot.com/o/mariposa%20copy.png?alt=media&token=c9d15a6b-559d-4940-8d5a-8f9f27beddc5"
                  leftColor="#A74CF2"
                  rightColor="#617BFB"
                />, container)

//Comentado en cap 9 para hacer la inclusion de nuestros componentes correctamente
/* const name = 'Eduardo'
const user = {
  firstName : 'Eduardo',
  lastName : 'Mejias',
  avatar : 'https://firebasestorage.googleapis.com/v0/b/discipulados-react.appspot.com/o/icon_church_128px.png?alt=media&token=8cf27fb0-066a-4d4e-b95d-b2a48f52e50f'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user){
  if(user){
      return <h1>Hello {getName(user)} </h1>
  }
  return <h1>Hello Extraño XD</h1>
}

//const element = <h1>Hello {getName(user)} </h1>
//const element = <div>{getGreeting(user)} </div>
//const element = <img src={user.avatar}  />
const element = (
  <div>
    <h1>{getGreeting(user)} </h1>
    <img src={user.avatar}  />
  </div>
) */