import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contactus.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_o2mbnzr', 'template_o0xi1t8', e.target, 'RKKok9jfkMXhCRbMY')
      .then(result => {
        console.log(result.text);
        // Optionally, you can show a success message to the user
      })
      .catch(error => {
        console.error(error.text);
        // Optionally, you can show an error message to the user
      });

    // Clear form inputs after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='first-con'>

        <div className='col-container'>
            
            <div className='left-section'>
                <div className='left-card'>
                    <h2>Get In Touch</h2>
                </div>
                <ul className="social-links">
                        <li><a href="https://www.linkedin.com/in/anuththara-perera-483854263/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin fa-2x"></i></a></li>
                        <li><a href="https://x.com/AnuPerera21?s=20"><i className="fab fa-twitter fa-2x"></i></a></li>
                        <li><a href="anuperera.219@gmail.com"><i className="far fa-envelope fa-2x"></i></a></li>

                </ul>
            </div>
        
        <form onSubmit={handleSubmit} className='contact-form'>
            <div>
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-text" required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-text" required />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="input-text" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send</button>
        </form>
        </div>
      
    </div>
  );
};

export default Contactus;
