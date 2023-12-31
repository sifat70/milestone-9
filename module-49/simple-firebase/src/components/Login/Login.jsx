import { useState } from "react";
import app from "../firebase/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'


const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>

            {/* user ? logout : sign in */}
            {user ? <button onClick={handleSignOut}>Log out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Google Sign in</button>
                    <button onClick={handleGithubSignIn}>Github Sign in</button>
                </>
            }

            {
                user && <div>
                    <h3>User: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div >
    );
};

export default Login;