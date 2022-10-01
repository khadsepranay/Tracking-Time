import {createContext,useReducer} from "react"


export let AuthContext = createContext()

function AuthContextProvider({children}){
    let initState = {
        token : '',
        isAuth : false,
        email : ''
    }

    function reducer(state,action){
        switch(action.type){
            case "isAuth" : return {...state,isAuth:action.payload};
            case "token" : return {...state,token:action.payload};
            case "email" : return {...state,email:action.payload}
            default : return state
        }
    }
    let [state,dispatch] = useReducer(reducer,initState)

    return(
        <AuthContext.Provider value={{state,dispatch}}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider