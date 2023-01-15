import { useAuth } from "./auth"
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { useLoading } from "../contexts/loading";
import { useState } from 'react'


export const AuthrequireLogin = ({ children }) => {
    const { user, setUser } = useAuth();
    const location = useLocation()
    if (!user) {
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }

    return children
}

export const AuthrequireRegister = ({ children }) => {
    const { user, setUser } = useAuth();
    const location = useLocation()
    if (!user) {
        return <Navigate to="/register" state={{ path: location.pathname }} />
    }

    return children
}