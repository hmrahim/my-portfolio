import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"
import Spiner from '../Dashboard/Spiner';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        return <Spiner/>
    }
if(!user){
    return <Navigate to="/login" state={{from:location}} replace />
}
    return <Outlet/>
};

export default RequireAuth;