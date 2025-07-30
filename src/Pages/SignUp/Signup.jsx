import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthContext';
import { Link, useNavigate } from 'react-router';

const SignUp = () => {
let { signUp}=useContext(AuthContext)
let Navigate =useNavigate()
useEffect(() => {
    loadCaptchaEnginge(6); 
  }, []);

   const [disable, setDisable] = useState(true);
  const [captchaInput, setCaptchaInput] = useState('');

  const handleCaptchaValidation = () => {
    if (validateCaptcha(captchaInput)) {
      alert("Captcha সঠিক ✅");
      setDisable(false); // Enable Login button
    } else {
      alert("Captcha ভুল ❌");
      setDisable(true); // Disable Login button
    }
  };

    let handleSignUp =(e)=>{
e.preventDefault()
let Form = e.target
 let email =Form.email.value
    let password =Form.password.value
    let person =Form.person.value
    let captcha =Form.captcha.value
    let userInfo = {
  email,
  password,
  person
};
 signUp (email, password).then((result) => {
        console.log("User created:", result.user);
        Form.reset();
       Navigate('/Home')
      })
if (validateCaptcha(captcha)) {
  console.log( userInfo);
  
}else{
    alert('thik koro vai')
}
    }

     
   

  return (
    <div>
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">    
    </div>
    <div className="card bg-stone-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="form"onSubmit={handleSignUp} >
              <label className="label">Name</label>
          <input type="text" name='person' className="input bg-orange-200 text-black" placeholder="name" />
          <label className="label">Email</label>

          <input type="email" name='email' placeholder="Email" className=" h-9 w-[320px] mx-auto bg-red-950 text-white" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input bg-orange-200 text-black" placeholder="Password" />
         
          <div><a className="link link-hover">Forgot password?</a></div>
          <label className="label">Captcha</label>
<div className="w-[150px] h-[50px] overflow-hidden">
  <LoadCanvasTemplate />
</div>
 
 <input
                type="text"
                name="captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="input bg-amber-50"
                placeholder="Enter the captcha"
              />
 <button type="button" onClick={handleCaptchaValidation} className="btn bg-orange-200 text-black  w-full mt-2">
                Validate Captcha
              </button>
              <div>
                <button disabled={disable}  type='submit'  className="btn bg-gray-500 w-full mt-7">SignUp</button>
              </div>
                  <Link to={'/'}>please Login</Link>
          
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default SignUp;