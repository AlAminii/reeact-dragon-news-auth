import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { Authcontext } from "../AuthProviders/AuthProvider";


const Register = () => {
    const {CreateRegister} = useContext(Authcontext)

    const handaleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,email, password)

        CreateRegister(email, password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error)
        })

    }



    return (
        <div>
        <Navbar></Navbar>
          <h1 className="text-3xl text-center mt-4 md lg:max-w-xl ">Register your account</h1>
           <form onSubmit={handaleRegister} className="card-body md:w-3/4 lg:1/2 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text"  name="name" placeholder="Your Name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input type="text"  name="photo" placeholder="Your Photo Url" className="input input-bordered" required />
      </div>
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
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
    <p className="text-center">Do not have an accoutn ? <Link className="text-blue-500" to="/login">Login</Link></p>
      </div>
    );
};

export default Register;