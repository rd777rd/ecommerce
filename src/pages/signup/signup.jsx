import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
// import {CUSTOMERS} from "../../customers";
import "./signup.css";
import Validation from './SignupValidation';
import axios from 'axios';

export const Signup = () => {
  const [values, setValues] = useState({
    firstName:'',
    lastName:'',
    birthDate:'',
    address:'',
    email: '',
    password: '',
  })
  const navigate = useNavigate();
const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const err= Validation(values);
    setErrors(err);
    if(err.firstName === "" && err.lastName ==="" && err.birthDate === "" && err.address ==="" && err.email === "" && err.password ==="") {
      axios.post('https://ecommercedb-q0qz.onrender.com/login', values)
      .then(res => {
        navigate('/login');
      })
       .catch(err => console.log(err));
    }

  } 
  return (
    <div className="signUp">
      <div className='signUpTitleContainer'>
        <h1 className='signUpTitle'>Sign Up</h1>
        <p className="">Create an account below.</p>
      </div>
      <div className="signContainer">
        <form action="" onSubmit={handleSubmit}> 
      <div className="firstName">
        <label htmlFor='firstName'>First Name:</label>
            <input type='text' placeholder='First Name' id="firstName" name='firstName' onChange={handleInput}></input>
            {errors.firstName && <span className='errorMessage'> {errors.firstName} </span>}
        </div>
        <div className="lastName">
        <label htmlFor='lastName'>Last Name:</label>
            <input type='text' placeholder='Last Name' id="lastName" name='lastName' onChange={handleInput}></input>
            {errors.lastName && <span className='errorMessage'> {errors.lastName} </span>}

        </div>
        <div className="address">
        <label htmlFor='address'>Enter Your Address:</label>
            <input type='address' placeholder='Enter your address' id="address" name='address' autoComplete='on' onChange={handleInput}></input>
            {errors.address && <span className='errorMessage'> {errors.address} </span>}
        </div>
        <div className="birthDate">
        <label htmlFor='birthDate'>Enter Your Birthdate:</label>
            <input type='date' placeholder='Enter Your Birthdate' id="birthDate" name='birthDate' autoComplete='off' onChange={handleInput}></input>
            {errors.birthDate && <span className='errorMessage'> {errors.birthDate} </span>}
        </div>
        <div className="email">
        <label htmlFor='email'>Enter Your Email:</label>
            <input type='email' placeholder='Enter your email' name='email' id="email" autoComplete='off'  onChange={handleInput} ></input>
            {errors.email && <span className='errorMessage'> {errors.email} </span>}
        </div>
        <div className='password'>
            <label htmlFor='password'>Create A Password:</label>
            <input type='password' placeholder='Enter new password' id="password" name='password' onChange={handleInput} ></input>
            {errors.password && <span className='errorMessage'> {errors.password} </span>}

        </div>
        <Link to="/login" className='lilink'>Already Have An Account?</Link>
        <button type='submit' className="signUpButton">Create Account</button>
        </form>
        </div>
    </div>
  )
}
