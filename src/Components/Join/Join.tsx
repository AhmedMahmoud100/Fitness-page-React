import React, { useRef } from 'react'
import './Join.css'
import emailjs from 'emailjs-com'

export default function Join() {
  const form = useRef<any>()
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_3g3tl0e', 'template_h1yyf0q', form.current, 'berH8couvWpdxMnA-')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className='join container' id='join-us'>
      <section className="left-s">
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </section>
      <section className="right-s">
        <form ref={form} onSubmit={sendEmail}>
          <input type="email" name='user-email' placeholder='Enter your Email Address here' />
          <button className='join-btn'>Join Now</button>
        </form>
      </section>
    </div>
  )
}
