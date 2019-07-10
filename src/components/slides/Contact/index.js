import React, {useState} from 'react';
import './styles.css';

function Contact() {
  const [name, setNameValue] = useState('');
  const [email, setEmailValue] = useState('');
  const [subject, setSubjectValue] = useState('');
  const [message, setMessageValue] = useState('');
  const [status, setStatusValue] = useState('');

  const isValid = () => {
    return name && email && subject && message ? true : false;
  }

  const resetValues = () => {
    setNameValue('');
    setEmailValue('');
    setSubjectValue('');
    setMessageValue('');    
  };

  const sendMessage = () => {
    if (isValid()) {
      setStatusValue(`Thank you ${name}, expect a response from us soon!`);
    } else {
      setStatusValue('Please make sure all fields are filled.');
    }

    resetValues();
    setTimeout(() => {
      setStatusValue('')
    }, 3000);
  }

  return (
    <section className='page_section contact'>
      <section className='contact_form'>
        <h1>Contact Us</h1>
        {status && <h2>{status}</h2>}
        <section className='form'>
          <section className='inputs'>
            <input type='text' placeholder='Name' name='name' autoComplete='off' onChange={e => setNameValue(e.target.value)} required />
            <input type='email' placeholder='Email' name='email' autoComplete='off' onChange={e => setEmailValue(e.target.value)} required />
            <input type='text' placeholder='Subject' name='subject' autoComplete='off' onChange={e => setSubjectValue(e.target.value)} required />
          </section>
          <textarea name='message' placeholder="Tell us what's on your mind" onChange={e => setMessageValue(e.target.value)} ></textarea>
          <section className='form_button' onClick={() => sendMessage()}><p>Send</p></section>
        </section>
      </section>
    </section>
  )
}

export default Contact;