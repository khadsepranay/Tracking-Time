import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";

function UserInfo() {
  let { state } = useContext(AuthContext);
  if (state.name) {
    return (
      <Text fontWeight="bold" color="#ED565E" fontSize="15px">
        {state.name}
      </Text>
    );
  }
  return;
}

export default UserInfo;
