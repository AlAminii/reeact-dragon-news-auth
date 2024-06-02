import { useContext } from "react";
import { Authcontext } from "./AuthProviders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(Authcontext)
    const  loaction = useLocation()
    console.log(loaction)
    console.log(loaction.pathname)
    if(loading){
        return  <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children

    }
    return <Navigate state={loaction.pathname} to="/login"></Navigate>
};

export default PrivateRoute;