import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";


const Register = () => {
    const { signUp } = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        console.log('testasdasd');

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/.test(password)) {
            setError('at least one lowercase, one uppercase and a number');
        } else {
            setError("");
            if (email) {
                signUp(email, password).then((result) => console.log(result.user));
                signUp(email, password)
                    .then(result => {
                        console.log(result.user)
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }

        }
    }

    console.log(email, password);

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
                <p>{error}</p>
            </form>
            <div className="form-control mt-6">
                <button onClick={handleRegister} className="btn btn-primary">Register</button>
            </div>
            <div className="text-center mt-6">
                <button className="btn btn-primary">Google Login</button>
            </div>
        </div>
    );
};

export default Register;