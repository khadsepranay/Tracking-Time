import { Box, Text, Input, Button, Image, Link, Stack } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import BlogData from "../BlogData.json";
import Footer from "../Components/Footer";

function Blog() {
  return (
    <>
      <Navbar />
      <Box
        position="relative"
        top="66px"
        width="100vw"
        bg="#f6f8f9"
        fontFamily="font-family: -apple-system,system-ui,BlinkMacSystemFont"
      >
        <Box bg="#3A609B" color="white" alignItems="center">
          <Box width="80vw" margin="auto" textAlign="center">
            <Stack>
              <Text
                margin="50px auto 30px auto"
                fontSize="12px"
                fontWeight="800"
                letterSpacing={1.2}
              >
                TIMEKEEPING AND PRODUCTIVITY ARTICLES
              </Text>
              <Box alignItems="center">
                <Image
                  src="https://trackingtime.co/wp-content/uploads/2022/09/Ilustraciones-Blog-Post-New-Image_240x146px-BlogPost-A-3.svg"
                  margin="auto"
                  width="240px"
                ></Image>
              </Box>
              <Text fontWeight="700" padding="10px" fontSize="36px">
                Introducing Our Fresh New Look and Roadmap
              </Text>
              <Box>
                <Button
                  bg="#3A609B"
                  letterSpacing={1.5}
                  fontSize="13px"
                  width="180px"
                  margin="70px auto"
                  borderWidth="2px"
                  _hover={{ color:'#3A609B', borderColor:'#3A609B',backgroundColor:'white' }}
                >
                  READ ARTICLE
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          margin="25px auto"
          width="78vw"
          gap="20px"
        >
          {BlogData.BlogData &&
            BlogData.BlogData.map((el, i) => {
              return (
                <Box boxShadow="1px 1px 10px rgb(0,0,0,0.3)">
                  <Image
                    src={el.Image}
                    bg={`rgb(${Math.random() * 255} ${Math.random() * 255} ${
                      Math.random() * 255
                    })`}
                    height="200px"
                    width="100%"
                  ></Image>
                  <Box width="85%" textAlign="center" margin="auto">
                    <Text
                      color="#242954"
