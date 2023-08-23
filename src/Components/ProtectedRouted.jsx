import { Navigate } from "react-router-dom"
import useAuth from "../context/authFunctions"
import PropTypes from 'prop-types';
export function ProtectedRouted({children}) {
    const {currentUser,loading}=useAuth()
    if(loading) return <p>Loading...</p>
    if(!currentUser) return <Navigate to='/' />
    return (
        <>
          {children}  
        </>
    )
}

ProtectedRouted.propTypes = {
    children: PropTypes.node.isRequired
  };