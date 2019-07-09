import React from 'react';

function Contact() {
  return (
    <section className='page_section contact'>
      <section className='contact_form'>
        <h1>Contact Us</h1>
        <section className='form'>
          <section className='inputs'>
            <input type='text' placeholder='Name' name='name' autoComplete='off' />
            <input type='email' placeholder='Email' name='email' autoComplete='off' />
            <input type='text' placeholder='Subject' name='subject' autoComplete='off' />
          </section>
          <textarea name='message' placeholder="Tell us what's on your mind"></textarea>
          <section className='form_button'><p>Send</p></section>
        </section>
      </section>
    </section>
  )
}

export default Contact;