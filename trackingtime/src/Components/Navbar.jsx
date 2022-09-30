import {
  Box,
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box
      width="100vw"
      height="66px"
      position="fixed"
      backgroundColor="#f6f8f9"
      fontSize={13}
      letterSpacing={1.5}
      fontFamily="font-family: -apple-system,system-ui,BlinkMacSystemFont"
      pos="fixed"
      zIndex={1}
    >
      <Box
        padding={5}
        width="78vw"
        margin="auto 0px auto 140px"
        backgroundColor="#f6f8f9"
      >
        <Flex justifyContent="space-between">
          <Image
            src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg"
            maxW={192}
          />
          <Flex justifyContent="space-between" gap="50px">
            <Box>
              <Link to="/integration">
                <Text color="#242954" fontWeight={700}>
                  INTEGRATIONS
                </Text>
              </Link>
            </Box>
            <Box>
              <Link to="/integration">
                <Text color="#242954" fontWeight={700}>
                  BLOG
                </Text>
              </Link>
            </Box>
            <Box>
              <Menu>
                <MenuButton
                  color="#242954"
                  fontWeight={700}
                  letterSpacing={1.5}
                >
                  FEATURES
                </MenuButton>
                <MenuList color="#242954" fontWeight={700}>
                  <MenuItem color="#242954" fontWeight={700}>
                    <Link to="/timetracker">Time Tracker</Link>
                  </MenuItem>
                  <MenuItem color="#242954" fontWeight={700}>
                    <Link to="/timetracker">Project Management</Link>
                  </MenuItem>
                  <MenuItem color="#242954" fontWeight={700}>
                    <Link to="/timetracker">Online Timesheet</Link>
                  </MenuItem>
                  <MenuItem color="#242954" fontWeight={700}>
                    <Link to="/timetracker">Time Cards</Link>
                  </MenuItem>
                  <MenuItem color="#242954" fontWeight={700}>
                    <Link to="/timetracker">Attendance Tracking</Link>
                  </MenuItem>
                  <MenuItem color="#242954" fontWeight={700}>
                    <Link to="/timetracker">Time Reporting</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Link to="/login">
                <Text
                  w="100%"
                  backgroundColor="#F6F8F9"
                  fontSize={12}
                  as="b"
                  borderWidth="2px"
                  borderColor="#ED565A"
                  padding="8px 25px"
                  color="#ED565E"
                  borderRadius="5px"
                >
                  TRY IT FREE
                </Text>
              </Link>
            </Box>
            <Box>
              <Link to="/login">
                <Text
                  w="100%"
                  backgroundColor="#ED565E"
                  fontSize={12}
                  as="b"
                  borderWidth="2px"
                  borderColor="#ED565A"
                  padding="8px 25px"
                  color="#F6F8F9"
                  borderRadius="5px"
                >
                  LOGIN
                </Text>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;
