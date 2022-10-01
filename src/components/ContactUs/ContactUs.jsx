// import React from 'react'
import Styles from './ContactUs.module.css'
/* EmailJS */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
/* EmailJS */



export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
  
    emailjs.sendForm('service_u4ejbhg', 'template_25rdsg7', form.current, 'svn8nz5DKeBiAnHj9')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    alert("Mensaje enviado!")
    })
  }


  return (
    <div className={Styles.container}>
      <h4>Pedí tu presupuesto</h4>
      <form ref={form} onSubmit={sendEmail}>
        <label><h6>Nombre Completo <span>*</span></h6></label>
        <input type="text" id="user_name" name="user_name"/>
        <label><h6>Email <span>*</span></h6></label>
        <input type="text" id="user_email" name="user_email"/>
        <label><h6>Teléfono <span>*</span></h6></label>
        <input type="number" id="phone" name="phone"/>
        <label><h6>Consulta <span>*</span></h6></label>
        <textarea name="message" rows="10" cols="30" placeholder='Contanos un poco mas de tu evento...'>
        </textarea>
        <input type='submit' value="Send"/>{/* ENVIAR CONSULTA</input> */}
      </form>
      
    </div>
  )
}
