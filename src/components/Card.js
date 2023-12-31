import React from 'react'
import './Card.css'

function Card({title,content,img}) {
  return (

      <div className='card' >
        <h1 className='head'>{title}</h1>
        <br/>
        <h3 className='content'> {content}</h3>
        <br></br><br></br>
        <img className= 'image' src={img} width="400" height="400" ></img>
    </div>

  )
}

export default Card