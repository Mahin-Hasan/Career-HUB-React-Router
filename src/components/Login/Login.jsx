import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import './Login.css'

const Login = () => {

    const { googleSignIn, signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleGoogle = () => {
        console.log('clicked');
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
    }

    const handleLogin = () => {
        if ((email, password)) {
            signIn(email,password)
            .then(res=>console.log(res.user))
            .catch(err=>setError(err.message))
        }
    }


    return (
        <div className="w-full md:w-9/12 lg:w-1/2 mx-auto">
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" required name="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="password" name="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
            </form>
            <p>{error}</p>
            <div onClick={handleLogin} className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-center mt-6">
                <button onClick={handleGoogle} className="btn btn-primary">Google Login</button>
            </div>
        </div>
    );
};

export default Login;