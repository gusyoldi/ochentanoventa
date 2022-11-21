// import React from 'react'
import Styles from "./ContactUs.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const form = useRef();

  const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
 

  const sendEmail = () => {
    // e.preventDefault()

    emailjs.sendForm('service_mtdmr5r', 'template_ntmq6rx', form.current, 'm4-E800NJXGTBTwxH')
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
      <form ref={form} onSubmit={handleSubmit(sendEmail)} /* onSubmit={sendEmail} */>
        <label>
          <h6>
            Nombre Completo <span>*</span> {errors.user_name && <span>Es necesario un nombre</span>}
          </h6>
        </label>
        <input type="text" id="user_name" name="user_name" {...register("user_name", {required: true})} />
        <label>
          <h6>
            Email <span>*</span> {errors.user_email && <span>Es necesario un email</span>}
          </h6>
        </label>
        <input type="email" id="user_email" name="user_email" {...register("user_email", {required: true})}  />
        <label>
          <h6>
            Teléfono <span>*</span> {errors.phone && <span>Es necesario un número</span>}
          </h6>
        </label>
        <input type="number" id="phone" name="phone" {...register("phone", {required: true})}  />
        <label>
          <h6>
            Consulta <span>*</span> {errors.message && <span>Es necesario un mensaje</span>}
          </h6>
        </label>
        <textarea
          name="message"
          rows="10"
          cols="30"
          placeholder="Contanos un poco mas de tu evento..."
          {...register("message", {required: true})}
        ></textarea>
        
        <button type="submit" value="Send" >
          ENVIAR CONSULTA
        </button>
      </form>
    </div>
  );
}
