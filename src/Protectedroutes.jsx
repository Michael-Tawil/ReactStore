import { useNavigate,useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Protectedroutes({loggedIn,children}){

    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        if(!loggedIn && location.pathname !== "/login"){

            navigate('/')

        }

    },[loggedIn])
    return loggedIn? children : null
}