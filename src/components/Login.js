import { useState } from "react";
import { UseAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState("")
    const auth = UseAuth()
    const navigate = useNavigate()
    const handleLogin = ()=>{
        auth.login(user)
        navigate('/', {replace:true })
    }
    return (
        <div>
            <label>
                Username: <input type="text" onChange={(e)=> setUser(e.target.value)}/>
                </label>
                <button onClick={handleLogin}>Login</button>
        </div>
    );
};

Login.propTypes = {};

export default Login;