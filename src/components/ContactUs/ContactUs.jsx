import React from 'react'
import Styles from './ContactUs.module.css'

export default function ContactUs() {
  return (
    <div className={Styles.container}>
      <h4>Pedí tu presupuesto</h4>
      
      <form action="#" method='POST' target="_blank">
        <label for="name"><h6>Nombre</h6></label>
        <input type="text" id="name" name="name"/>
        <label for="email"><h6>E-mail</h6></label>
        <input type="text" id="email" name="email"/>
        <label for="phone"><h6>Teléfono</h6></label>
        <input type="text" id="phone" name="phone"/>
        <label for="query"><h6>Consulta</h6></label>
        <textarea name="query" rows="10" cols="30">
        </textarea>
        <button>ENVIAR CONSULTA</button>
      </form>
      
    </div>
  )
}
