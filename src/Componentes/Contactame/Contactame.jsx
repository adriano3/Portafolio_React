import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Contactame.css';

export const Contactame = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !telefono || !email || !mensaje) {
      setError('Por favor, rellena todos los campos');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, introduce un correo electrónico válido');
      return;
    }

    alert('Mensaje enviado exitosamente');
    setError('');
    setNombre('');
    setTelefono('');
    setEmail('');
    setAsunto('');
    setMensaje('');
  };

  return (
    <div className="container-main">
      <div className="contact-form">
        <h2>Contáctame</h2>
        {error && <p className="error">{error}</p>}
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/adrianobandoguaman@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="asunto">Asunto:</label>
            <input
              type="text"
              name="subject"
              id="asunto"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>
          <button type="submit">Enviar Mensaje</button>
          <input type="hidden" name="_next" value="http://localhost:5173/Contactame" />
          <input type="hidden" name="_subject" value={`Nuevo mensaje de ${nombre}`} />
          <input type="hidden" name="_replyto" value={email} />
        </form>
      </div>
      <div className="card">
        <h3>Información de Contacto</h3>
        <div className="contact-item"> <FaUser className="contact-icon" /> <p>Adrian Obando Guaman</p> </div> <div className="contact-item"> <FaPhone className="contact-icon" /> <p>+591-65348346</p> </div> <div className="contact-item"> <FaEnvelope className="contact-icon" /> <p>adrianobandoguaman@gmail.com</p> </div> <div className="contact-item"> <FaMapMarkerAlt className="contact-icon" /> <p>Calle Camiri, Cochabamba, Bolivia</p> </div>
      </div>
    </div>
  );
};
