import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { Authcontext } from "../AuthProviders/AuthProvider";




const Login = () => {
  const { SignInUser} = useContext(Authcontext)
  const loacation = useLocation()
  const navigate = useNavigate()
  console.log(  'insideloaction',loacation)

    const handaleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        SignInUser(email, password)
        .then(res=>{
          console.log(res.user)
          navigate(loacation?.state? loacation.state: '/')
         
        })
        .catech(error=>{
          console.log(error)
        })
        
    }

    return (
        <div>
          <Navbar></Navbar>
            <h1 className="text-3xl text-center mt-4 md lg:max-w-xl ">Login your account</h1>
             <form onSubmit={handaleLogin} className="card-body md:w-3/4 lg:1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">Do not have an accoutn ? <Link className="text-blue-500" to="/register">Register</Link></p>
        </div>
    );
};

export default Login;