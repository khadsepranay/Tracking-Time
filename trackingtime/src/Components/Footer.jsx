import {
  Text,
  Box,
  Stack,
  Image,
  Button,
  Input,
  Link,
  VStack,
  OrderedList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Box width="75vw" margin="auto">
      <Stack>
        <Box width="50%" margin="100px 0 100px 0">
          <Image
            src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/footer/tt.svg"
            width="13%"
          ></Image>
          <Text
            color="#242954"
            fontWeight="bold"
            fontSize="40px"
            margin="20px 0px"
          >
            Get Started
          </Text>
          <Text
            fontFamily="font-family: -apple-system,system-ui,BlinkMacSystemFont"
            fontWeight="medium"
            fontSize="18px"
            color="gray"
          >
            Sign up today and join thousands of people around the world using
            TrackingTime to make the most of their time.
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            width="35vw"
            margin="40px 0px 40px -20px"
          >
            <Box>
              <Input
                type="email"
                backgroundColor="white"
                margin="0 20px"
                borderColor="black"
                borderWidth="1px"
                padding="10px 20px"
                placeholder="Your Work E-mail"
              ></Input>
            </Box>
            <Box>
              <Button
                bg="#ED565E"
                letterSpacing={2}
                fontSize={13.5}
                color="white"
                margin="0 20px"
                padding="5px 20px"
                width="110%"
                _hover={{backgroundColor:'#F03339'}}
              >
                START FOR FREE!
              </Button>
            </Box>
          </Box>
          <Box display="flex">
            <Image
              width="25px"
              marginRight="20px"
              src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/google-key.png"
            />
            <Link
              href="https://mail.google.com/"
              color="#242954"
              fontWeight={750}
            >
              Sign in to Google
            </Link>
          </Box>
        </Box>
      </Stack>
      <Box display="flex" gap="60px">
        <Box>
          <Stack>
            <Text
              color="#242954"
              fontWeight={700}
              fontSize="14px"
              marginLeft="0px"
            >
              Industries
            </Text>
            <UnorderedList
              lineHeight={2}
              listStyleType="none"
              fontSize="13px"
              color="#242954"
            >
              <ListItem>Time tracking for Graphic Designers</ListItem>
              <ListItem>Time tracking software for Architects</ListItem>
              <ListItem>Time tracking for Remote Workers</ListItem>
              <ListItem>Time tracking for Marketing Teams</ListItem>
              <ListItem>Time tracking for Freelancers</ListItem>
            </UnorderedList>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Text
              color="#242954"
              fontWeight={700}
              fontSize="14px"
              marginLeft="0px"
            >
              Product
            </Text>
            <UnorderedList
              lineHeight={2}
              listStyleType="none"
              fontSize="13px"
              color="#242954"
            >
              <ListItem>Plans and Pricing</ListItem>
              <ListItem>Integrations</ListItem>
              <ListItem>Product Updates</ListItem>
              <ListItem>Slack Bot</ListItem>
              <ListItem>Microsoft Teams</ListItem>
            </UnorderedList>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Text
              color="#242954"
              fontWeight={700}
              fontSize="14px"
              marginLeft="0px"
            >
              Features
            </Text>
            <UnorderedList
              lineHeight={2}
              listStyleType="none"
              fontSize="13px"
              color="#242954"
            >
              <ListItem>Online Timesheet For Efficient Companies</ListItem>
              <ListItem>Time Tracker for every business</ListItem>
              <ListItem>
                Reports for billing and payroll to reduce administrative work
              </ListItem>
              <ListItem>Attendance tracker for every business</ListItem>
              <ListItem>Project Management Time Tracking Software</ListItem>
            </UnorderedList>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Text
              color="#242954"
              fontWeight={700}
              fontSize="14px"
              marginLeft="0px"
            >
              Apps
            </Text>
            <UnorderedList
              lineHeight={2}
              listStyleType="none"
              fontSize="13px"
              color="#242954"
            >
              <ListItem>Web App</ListItem>
              <ListItem>Time Tracker app for Mac</ListItem>
              <ListItem>Time Tracker for Windows</ListItem>
              <ListItem>iPhone app</ListItem>
              <ListItem>Android app</ListItem>
            </UnorderedList>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Text
              color="#242954"
              fontWeight={700}
              fontSize="14px"
              marginLeft="0px"
            >
              Company
            </Text>
            <UnorderedList
              lineHeight={2}
              listStyleType="none"
              fontSize="13px"
              color="#242954"
            >
              <ListItem>About Us</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Media kit</ListItem>
              <ListItem>Terms of service</ListItem>
              <ListItem>Privacy Policy</ListItem>
            </UnorderedList>
          </Stack>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="35vw"
        margin="100px 0 0 0"
        lineHeight="50px"
        padding="25px 0"
      >
        <Box>
          <Box display="flex" justifyContent="space-between" marginTop="19px">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIqxPKss_WM__jvRoJUfzp_0GEFsvvCTInA&usqp=CAU"
              width="40px"
              borderRadius="50%"
            ></Image>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEDZ109uAmeq7h3hpghEvnREUsz9WznOpGQ&usqp=CAU"
              width="40px"
            ></Image>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiTex0aUV9GIbxqzJUJ4n3Hi_gxixt-aTLQ&usqp=CAU"
              width="40px"
            ></Image>
          </Box>
          <Link color="#242954" fontWeight={700} fontSize="14px">
            support@trackingtime.co
          </Link>
          <Box
            lineHeight={2}
            listStyleType="none"
            fontSize="13px"
            color="#242954"
          >
            © 2022 TrackingTime, LLC
          </Box>
        </Box>
        <Box>
          <Stack>
            <Text
              color="#242954"
              fontWeight={700}
              fontSize="14px"
              marginLeft="0px"
            >
              Help & Support
            </Text>
            <UnorderedList
              lineHeight={2}
              listStyleType="none"
              fontSize="13px"
              color="#242954"
            >
              <ListItem>Help Center</ListItem>
              <ListItem>Developers</ListItem>
              <ListItem>Contact us</ListItem>
            </UnorderedList>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Text
              color="#242954"
              fontWeight={700}
              fontSize="14px"
              marginLeft="0px"
            >
              Choose Langauge
            </Text>
            <UnorderedList
              lineHeight={2}
              listStyleType="none"
              fontSize="13px"
              color="#242954"
            >
              <ListItem>English</ListItem>
              <ListItem>Hindi</ListItem>
              <ListItem>Marathi</ListItem>
            </UnorderedList>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
