import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    

    if(loading ){
        return <div className='flex justify-center items-center h-screen'>
            <button className="btn btn-square loading "></button>
        </div>
      }
    if(!user){
        return<Navigate to="/sign-in" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;