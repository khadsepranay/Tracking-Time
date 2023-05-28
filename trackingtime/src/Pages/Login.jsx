import {
  FormControl,
  Input,
  Button,
  Container,
  Stack,
  Box,
  Heading
} from "@chakra-ui/react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import React,{ useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
  let ele = React.createElement('h1',{color:'white',backgroundColor:},'Hi')
  let Info = {
    email: "",
    password: "",
    name: "",
  };
  let { state, dispatch } = useContext(AuthContext);
  let [info, setInfo] = useState(Info);
  let [buttonLoading, setButtonLoading] = useState(false);
  let [buttonDisabled,setButtonDisabled] = useState(true)

  useEffect(()=>{
    if(info.email=='' || info.name=='' || info.password==''){
      setButtonDisabled(true)
    }else{
      setButtonDisabled(false)
    }
  },[Info])

  function handleChangeInput(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    setButtonLoading(true);
    axios
      .post(`https://reqres.in/api/login`, {
        email: info.email,
        password: info.password,
      })
      .then((res) => {
        alert('Logged in successfully')
        dispatch({ type: "isAuth", payload: true });
        dispatch({ type: "token", payload: res.data.token });
        dispatch({ type: "email", payload: info.email });
        dispatch({ type: "name", payload: info.name });
        setButtonLoading(false);
      })
      .catch((err) => {
        alert('Invalid Credential')
        setButtonLoading(false);
      });
  }

  if (state.isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Box bg="#212121" width="100vw" height="100vh">
      <Container pos="relative" top="180px">
        <FormControl>
          <Box boxShadow="1px 1px 3px #111111" backgroundColor={'#212121'}>
            
          {ele}
            <Stack padding="30px" spacing="30px">
              <Input
                type="text"
                placeholder="User's Name"
                name="name"
                onChange={(e) => handleChangeInput(e)}
                borderColor="#808080"
                color='white'
                _placeholder={{color:'#c0c0c0'}}
              />
              <Input
                type="email"
                placeholder="E-mail Address"
                name="email"
                onChange={(e) => handleChangeInput(e)}
                borderColor="#808080"
                color='white'
                _placeholder={{color:'#c0c0c0'}}
              />
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChangeInput(e)}
                borderColor="#808080"
                color='white'
                _placeholder={{color:'#c0c0c0'}}
              ></Input>
              <Button
                isLoading={buttonLoading}
                backgroundColor={'#404040'}
                color="white"
                onClick={handleSubmit}
                sx={{_hover:{backgroundColor:'green'}}}
                isDisabled={buttonDisabled}
              >
                Log In
              </Button>
            </Stack>
          </Box>
        </FormControl>
        <Box style={{color:'grey',marginTop:'40px',textAlign:'center'}}>
          <Stack>
        <Heading as='h6' size='md' noOfLines={1} color='gray'>Use following credential for logging in</Heading>
        <Box style={{color:'green'}}>Email : eve.holt@reqres.in</Box>
        <Box style={{color:'green'}}>Password : 1234</Box>
        </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;

// eve.holt@reqres.in
// cityslicka
