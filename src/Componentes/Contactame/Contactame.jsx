import React, { useState } from 'react';
import './Contactame.css';
export const Contactame = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !email || !mensaje) {
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
        setEmail('');
        setAsunto('');
        setMensaje('');
    };
    return (
        <div className="contact-form">
            <h2>Contáctame</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="asunto">Asunto:</label>
                    <input
                        type="text"
                        id="asunto"
                        value={asunto}
                        onChange={(e) => setAsunto(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />
                </div>
                <button type="submit">Enviar Mensaje</button>
            </form>
        </div>
    );
};