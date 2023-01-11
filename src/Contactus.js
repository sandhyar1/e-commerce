import React from 'react'
import './Styles/Contact.css'

const Contactus = () => {
  return (
    <>
    <h2>Contact Page</h2>
    <div className='container'>
    <div className='form'>
    <form metod="POST" className="contact-inputs">
    <input 
    type="text"
    placeholder="enter Username"
    name="username"
    required
    autoComplete='off' />
 <input 
    type="email"
    placeholder='enter email'
   name="email"
   autoComplete='off'
   required/>
   <textarea name="Message"
   col="30"
   row="10"
   autoComplete='off'
   placeholder='Enter your message'
   required>
   </textarea>
   <input type="Submit" value="send" className='btn'/>
   </form>
   </div>
   </div>
   </>
  )
}

export default Contactus