import React from 'react'
import Styles from './ContactUs.module.css'

export default function ContactUs() {
  return (
    <div className={Styles.container}>
      <h4>Pedí tu presupuesto</h4>
      <form action="/" method='POST'>
        <label htmlFor="name"><h6>Nombre Completo <span>*</span></h6></label>
        <input type="text" id="name" name="name"/>
        <label htmlFor="email"><h6>Email <span>*</span></h6></label>
        <input type="text" id="email" name="email"/>
        <label htmlFor="phone"><h6>Teléfono <span>*</span></h6></label>
        <input type="text" id="phone" name="phone"/>
        <label htmlFor="query"><h6>Consulta <span>*</span></h6></label>
        <textarea name="query" rows="10" cols="30" placeholder='Contanos un poco mas de tu evento...'>
        </textarea>
        <button>ENVIAR CONSULTA</button>
      </form>
      
    </div>
  )
}
