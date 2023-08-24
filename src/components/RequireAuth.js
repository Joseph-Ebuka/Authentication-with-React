import { Navigate } from "react-router-dom";
import { UseAuth } from "./Auth";
import { children } from "react";

const RequireAuth = ({children}) => {
    const auth = UseAuth()
    if(!auth.user){
        return <Navigate to="/login" />
    }
    return children
};


export default RequireAuth;