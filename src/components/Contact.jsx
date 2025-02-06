
import React from 'react'
import {useState , useRef } from 'react';
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';

import { LamboCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import './Contact.css'
const Contact = () => {
const formRef=useRef();
const[form , setForm]=useState({name:'',email:'',message:''});
const [loading , setLoading]=useState(false);
const[disableButton , setbuttonToDisable]=useState(false);

const handleChange=(e)=>{
  const {name,value}=e.target;
  setForm({...form,[name]:value})

}
const handleSubmit =(e)=>{
  e.preventDefault();
  setLoading(true);

 

  emailjs.send( import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,{
    from_name: form.name,
    to_name: 'Developer',
    from_email:form.email,
    message: form.message

  }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY


).then(()=>{
  setLoading(false);
  alert('Thank you . I will get back to you as soon as possible.');
  setForm({
    name: '',
    email:'',
    message:''
  });
  setbuttonToDisable(true);
}).catch((err)=>{
    setLoading(false);
    console.log(err);
    alert('something went wrong')
  });
}

  return (
    

   <div className='contact-container'>
    <motion.div
    variants={slideIn('left','tween',0.1,2)}
    className='contact-box'
    >
      <p className='contact-para'>Get in touch</p>
      <h3 className='contact-head'>Contact</h3>

      <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='form-stuff'
      
      >
       <label className='first-label'>
        
        <span className='label-name'>Your Name </span>
        <input 
        type='text'
        name='name'
        value={form.name}
        onChange={handleChange}
        placeholder="What's your Name ?"
        className='custom-input' 
        />
        
        </label> 

        <label className='first-label'>
        
        <span className='label-name'>Your Email</span>
        <input 
        type='email'
        name='email'
        value={form.email}
        onChange={handleChange}
        placeholder="What's your Email ?"
        className='custom-input' 
        />
        
        </label> 

        <label className='first-label'>
        
        <span className='label-name'>Your Message </span>
        <textarea 
        rows='7'
        name='message'
        value={form.message}
        onChange={handleChange}
        placeholder="What do you want to say  ?"
        className='custom-input' 
        />
        
        </label> 
        <button disabled={loading || disableButton} type="submit" className="send-button">
          {loading ? 'Sending....' : disableButton ? 'Sent' : 'Send'}
        </button>

      </form>


    </motion.div>

    <motion.div
 variants={slideIn('right','tween',0.1,2) }
 className='lambo-container'
>

  <LamboCanvas />


</motion.div>
   </div>
  )
}



export default SectionWrapper(Contact,"contact");