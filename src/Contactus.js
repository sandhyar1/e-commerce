import React from 'react';
import styled from 'styled-components';

const Contactus = () => {
  return (
    <Wrapper>
    <h1 className='title'>Contact Page</h1>
    <div className='container'>
    <div className='form'>
    <form metod="POST" className="contact-inputs">
    <input 
    type="text"
    placeholder="enter Username"
    className='text'
    name="username"
    required
    autoComplete='off' />
 <input 
    type="email"
    placeholder='enter email'
    className='text'
   name="email"
   autoComplete='off'
   required/>
   <textarea name="Message"
   col="60"
   row="30"
   autoComplete='off'
   placeholder='Enter your message'
   className='text1'
   required>
   </textarea>
   <div className='send'>
   <input type="Submit" value="send" className='btn'/>
   </div>
   </form>
   </div>
   </div>
   </Wrapper>
  );
};
const Wrapper=styled.section`
padding:9rem 0 5rem 0;
text-align:center;
.container{
    margin-top:6rem;
.form{
    max-width:50rem;
    margin:auto;
.contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              background-color:white;
              border: 1px solid blue;
              color:blue;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
export default Contactus;