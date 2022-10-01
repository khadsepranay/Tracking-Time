import { Text, Box, Stack, Link, Button, Input, Image } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Data from "../IntegrationData.json";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";

function Integrations() {
  let { integrationData, Search } = useContext(AuthContext);
  return (
    <Box>
      <Box
        bg="#f6f8f9"
        width="100vw"
        fontFamily="font-family: -apple-system,system-ui,BlinkMacSystemFont"
      >
        <Box width="79vw" margin="auto" color="#242954" lineHeight="50px">
          <Stack>
            <Text
              marginTop="150px"
              letterSpacing={2.2}
              fontWeight="bold"
              fontSize="21px"
            >
              TRACKING TIME BUTTON FOR CHROME
            </Text>
            <Text
              fontSize="55px"
              lineHeight="65px"
              width="50%"
              fontWeight="bold"
            >
              TrackingTime Integrations
            </Text>
            <Text
              fontFamily="font-family: -apple-system,system-ui,BlinkMacSystemFont"
              marginTop="150px"
              letterSpacing={2.2}
              fontWeight="bold"
              fontSize="21px"
            >
              TIME TRACKING INTEGRATIONS THAT YOU'LL LOVE
            </Text>
          </Stack>
          <Box display="flex" alignItems="center" margin="40px auto">
            <Input
              bg="white"
              placeholder="SEARCH YOUR FAVORITE APP!"
              width="53%"
              height="75px"
              boxShadow="1px 1px 10px rgb(0,0,0,0.1)"
              onChange={Search}
            />
            <Search2Icon pos="relative" left="-40px" />
          </Box>
          <Box
            color="gray"
            lineHeight="30px"
            fontWeight="500"
            width="85%"
            fontSize="18px"
          >
            <Text>
              Improve your time tracking and increase your productivity with
              these Integrations.
            </Text>
            <Text>
              See how much time you spend on each task or project!
              TrackingTime's integrations make it easy to keep track of your
              billable and non-billable tasks by integrating with more than 30
              apps.
            </Text>
            <Text>
              TrackingTime's integrations make it easy to keep track of your
              billable and non-billable tasks by integrating with more than 30
              apps. TrackingTime can be integrated with other apps, such as
              project management, accounting, and customer support. Get instant
              timesheets and analytics with TrackingTime!
            </Text>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap="100px 50px"
            margin="50px auto"
          >
            {integrationData &&
              integrationData.map((el) => {
                return (
                  <Box>
                    <Stack>
                      <Box
                        width="85px"
                        height="85px"
                        bg="white"
                        boxShadow="0px 2px 15px rgb(0,0,0,0.1)"
                        borderRadius="10px"
                        borderWidth="1px"
                        display="flex"
                        alignContent="center"
                        justifyContent="center"
                      >
                        <Image src={el.Image} margin="auto" w="50%"></Image>
                      </Box>
                      <Text
                        margin="200px auto"
                        letterSpacing={1}
                        fontWeight="bold"
                        fontSize="28px"
                      >
                        {el.Title}
                      </Text>
                      <Text
                        color="gray"
                        lineHeight="25px"
                        margin="50px auto"
                        fontWeight="500"
                      >
                        {el.Desc}
                      </Text>
                    </Stack>
                  </Box>
                );
              })}
          </Box>
          <Box
            display="flex"
            gap="120px"
            justifyContent="space-between"
            alignItems="center"
            margin="200px 0"
          >
            <Box>
              <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/phone.png"></Image>
            </Box>
            <Box>
              <Stack>
                <Box>
                  <Text
                    margin="30px 0"
                    letterSpacing={1}
                    fontWeight="bold"
                    fontSize="40px"
                  >
                    Track Everywhere
                  </Text>
                </Box>
                <Box>
                  <Text
                    color="gray"
                    fontSize="18px"
                    lineHeight="30px"
                    width="70%"
                    marginBottom="50px"
                  >
                    Track your time everywhere you work with our mobile apps for
                    iOS and Android.
                  </Text>
                </Box>
                <Box display="flex" gap="25px">
                  <Box bg="black" width="65px" borderRadius="5px">
                    <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/playstore.png"></Image>
                  </Box>
                  <Box bg="black" width="65px" borderRadius="5px">
                    <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/apstore.png"></Image>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Integrations;
