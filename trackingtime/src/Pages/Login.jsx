import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Container,
  Stack,
  Box,
} from "@chakra-ui/react";
import {AuthContext} from "../AuthContextProvider/AuthContextProvider"
import {useContext,useState} from "react"
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
    let Info = {
        email : '',
        password : ''
    }
    let {state,dispatch} = useContext(AuthContext)
    let [info,setInfo] = useState(Info)


    function handleChangeInput(e){
        setInfo({...info,[e.target.name]:e.target.value})
    }

    function handleSubmit(){
        axios.post(`https://reqres.in/api/login`,{
            email : info.email,
            password : info.password
        }).then((res)=>{
            dispatch({type:"isAuth",payload:true})
            dispatch({type:"token",payload:res.data.token})
            dispatch({type:"email",payload:info.email})
        })
    }

    if(state.isAuth){
        return <Navigate to="/"/>
    }

  return (
    <Box bg="rgb(224,224,224,0.5)" width="100vw" height="100vh">
    <Container pos="relative" top="180px">
    <FormControl>
        <Box boxShadow="4px 2px 10px rgb(64,64,64,0.5)">
            <Stack padding="30px" spacing="30px">
          <Input type="email" placeholder="E-mail Address" name="email" onChange={(e)=>handleChangeInput(e)} borderColor="black" />
          <Input type="password" placeholder="Password" name="password" onChange={(e)=>handleChangeInput(e)} borderColor="black"></Input>
          <Button bg="#FF0055" color="white" onClick={handleSubmit}>Log In</Button>
          </Stack>
      </Box>
      </FormControl>
    </Container>
    </Box>
  );
}

export default Login;

// eve.holt@reqres.in
// cityslicka
