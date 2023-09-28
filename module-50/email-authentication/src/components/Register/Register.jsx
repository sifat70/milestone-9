import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked

        console.log(email, password, accepted);

        // reset error
        setRegisterError('')
        setSuccess('')

        if (password.length < 6) {
            setRegisterError("password should be at least 6 characters or longer");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters')
            return;
        }else if(!accepted){
            setRegisterError('Please accept out terms and condition!')
            return;
        }

        // create user 

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess("User created successfully")
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })
    }
    return (
        <div>
            <div className="mx-auto md: w-1/2">
                <p className="text-3xl mb-5">Please Register</p>
                <form onSubmit={handleRegister}>
                    <input required placeholder="Email Address" className="mb-4 w-full py-2 px-4 rounded" type="email" name="email" id="" /><br />
                    <div className="mb-4 relative">
                        <input required placeholder="Input Password" className="w-full py-2 px-4 rounded" type={showPassword ? "text" : "password"} name="password" id="" />
                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <br />
                    <div>
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our  <a href="">Terms and condition</a></label>
                    </div>
                    <br />
                    <input className="btn btn-secondary mb-4 w-full py-2 px-4" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-700">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;