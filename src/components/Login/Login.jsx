import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import './Login.css'

const Login = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogle = () => {
        console.log('clicked');
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
    }


    return (
        <div className="w-full md:w-9/12 lg:w-1/2 mx-auto">
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="text-center mt-6">
                <button onClick={handleGoogle} className="btn btn-primary">Google Login</button>
            </div>
        </div>
    );
};

export default Login;