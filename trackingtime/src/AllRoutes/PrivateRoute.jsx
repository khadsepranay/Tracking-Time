
import {AuthContext} from "../AuthContextProvider/AuthContextProvider"
import {useContext,useState} from "react"
import {Navigate} from "react-router-dom"


function PrivateRoute({children}){
    let {state} = useContext(AuthContext)
    if(!state.isAuth){
        return <Navigate to="/login"/>
    }
    return children
}

export default PrivateRoute