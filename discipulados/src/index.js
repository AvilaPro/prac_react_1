//Forma antigua de insertar elementos dentro del HTML
/* const element = document.createElement('h1')
element.innerText = 'Hello React'
const container = document.getElementById('root')
container.appendChild(element) */

//Forma de usar React

import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Eduardo'
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
)

const container = document.getElementById('root')

ReactDOM.render(element, container)