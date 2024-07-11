import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Login.js'
import './style.css'
import {auth} from './firebase.jsx'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log("account Created");
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='signup-container'>
      
      <form className='signup-form' onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <label htmlFor='email'>Email:
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
      </label> 

      <label htmlFor='fullName'>Full Name:
        <input type="text" onChange={(e) => setFullName(e.target.value)}/>
      </label>

      <label htmlFor='password'>Password:
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button type='submit'>Sign in</button>

      <p>Already registered? <Link to = "./Login" >Login here</Link> </p>
    </form>
  
    </div>
  );
}

export default Signup;
