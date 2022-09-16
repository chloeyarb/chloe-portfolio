import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name:'', email:'', message:''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        }else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    //DOM elements in contact form using JSX.
    return (
        <section>
            <h1 id='contact-header' className='text-center text-white'>Contact Me</h1>
            <h3 id='email' className='text-center'>cmyarboro@gmail.com</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='form-group col-md-5'>
                    <label htmlFor="name">Name: </label>
                    <input className="form-control" type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder='Your Name' />
                </div>
                <div className='form-group col-md-5'>
                    <label htmlFor="email">Email address:</label>
                    <input className="form-control" type="email" defaultValue={email} onBlur={handleChange} name="email" placeholder='Your Email'/>
                </div>
                <div className='form-group col-md-5'>
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="5" placeholder='Type message'/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div >
                <button className="btn" type="submit" id="button">Submit</button>
                </div>
            </form>
        </section>
    )

}

export default Contact;

