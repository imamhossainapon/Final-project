// import React, { useContext } from 'react';

// import { AuthContext } from '../../Provider/AuthContext';
// import { Link } from 'react-router';
// import { useNavigate } from 'react-router';
// const Login = () => {
// let { SignIn }=useContext(AuthContext)
// let  Navigate=useNavigate()


//     let handleLogin =(e)=>{
// e.preventDefault()
// let Form = e.target
//  let email =Form.email.value
//     let password =Form.password.value
//     let person =Form.person.value
   
//     let userInfo = {
//   email,
//   password,
//   person
// };
// SignIn(email, password).then((result) => {
//         console.log("User created:", result.user);
//         Form.reset();
//          Navigate('/Home')
//       })
//     }
   

//   return (
//     <div>
//         <div className="hero min-h-screen">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">    
//     </div>
//     <div className="card bg-stone-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <div className="card-body">
//         <form className="form"onSubmit={handleLogin} >
//               <label className="label">Name</label>
//           <input type="text" name='person' className="input bg-amber-50" placeholder="name" />
//           <label className="label">Email</label>
//           <input type="email" name='email' className="input " placeholder="Email" />
//           <label className="label">Password</label>
//           <input type="password" name='password' className="input bg-amber-50" placeholder="Password" />
         
//           <div><a className="link link-hover">Forgot password?</a></div>
          
//               <div>
//                 <button  type='submit'  className="btn bg-black w-full mt-7">
//                Login
//                 </button>
//               </div>
//                   <Link to={'/Signup'}>please create your id</Link>
          
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const person = form.person.value;

    const userInfo = {
      email,
      password,
      person
    };

    signIn(email, password)
      .then((result) => {
        console.log("User signed in:", result.user);
        form.reset();
        navigate('/Home');
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  };

  return (
    <div  className="hero min-h-screen  text-black bg-cover bg-center flex items-center justify-center  text-3xl font-bold bg-opacity-30"
 >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login Now</h1>
        </div>
        <div className="card bg-stone-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="form" onSubmit={handleLogin}>
              <label className="label">Name</label>
              <input type="text" name='person' className="input bg-amber-50" placeholder="Name" />
              
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" required />
              
              <label className="label">Password</label>
              <input type="password" name='password' className="input bg-amber-50" placeholder="Password" required />
              
              <div><a className="link link-hover">Forgot password?</a></div>
              
              <button type='submit' className="btn bg-black w-full mt-7 text-white">
                Login
              </button>

              <p className="mt-2">
                Don't have an account? 
                <Link to="/Signup" className="link text-blue-600"> Create one</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
