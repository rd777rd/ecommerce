import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
// import {CUSTOMERS} from "../../customers";
import "./login.css"
import Validation from './LoginValidation';
import axios from 'axios';
export const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    const err= Validation(values);
    setErrors(err);
    if(err.email === "" && err.password ==="") {
      axios.post('https://ecommerce-imta.onrender.com8081/login', values)
      .then(res => {
        if (res.data.Status === "Success"){
          navigate('/');

        }else{
          alert('No record existed');
        }
      })
       .catch(err => console.log(err));
    }
  } 
  return (
    <div className="logIn">
    <div className='logInTitleContainer'>
      <h1 className='logInTitle'>Login</h1>
      <p className="">Enter your email and password below</p>
    </div>
    <div className="logInContainer">
    <form onSubmit ={handleSubmit}>
      <div className="email">
      <label htmlFor='email'>Account Email:</label>
          <input type='email' id='email' placeholder='Enter Email' name='email' autoComplete='on' onChange={handleInput}></input>
          {errors.email && <span className='errorMessage'> {errors.email} </span>}
      </div>
      <div className='password'>
          <label htmlFor='password'>Enter Your Password:</label>
          <input type='password' id='password' placeholder='Enter Password' name='password'  onChange={handleInput}></input>
          {errors.password && <span className='errorMessage'> {errors.password} </span>}
      </div>
      <Link to="/signup" className='sulink'>Need an account? Sign Up</Link>
      <button type='submit' className="logInButton">Sign In</button>
      </form>
      </div>
  </div>
  )
}
