// src/context/authFunctions.js
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used inside an authprovider ')
    }
  return context
};

export default useAuth
