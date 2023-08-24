import { Outlet, useNavigate } from "react-router-dom";
import { UseAuth } from "./Auth";


const Profile = () => {
    const auth = UseAuth()
    const navigate = useNavigate()
    const handlelogout = ()=> {
        auth.logout()
        navigate('/')
    }
    return (
        <div>
            Welcome {auth.user}
            <button onClick={handlelogout}>Logout</button>
            <p>This entire page is dedicated to{auth.user}</p>
            <Outlet/>
        </div>
    );
};

export default Profile;