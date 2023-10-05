import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email  = form.get('email');
        const password = form.get('password')
        console.log(email,password);

        signIn(email, password)
        .then(result => {
            console.log(result)


            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="lg:w-1/2 mx-auto md:w-3/4 mt-10">
                <h1 className="text-3xl font-bold text-center ">Login your account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not Have An Account ? <Link className="text-lime-600 font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;