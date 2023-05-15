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
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
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

// eve.holt@reqres.in
// cityslicka
