import { Box, Text, Input, Button, Image, Link } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../styles.css";
function Home() {
  return (
    <>
      <Navbar />
      <Box backgroundColor="#f6f8f9">
        <Box
          width="70vw"
          margin="auto"
          textAlign="center"
          fontFamily="font-family: -apple-system,system-ui,BlinkMacSystemFont"
        >
          <Box padding="40px">
            <Text
              fontSize="13"
              letterSpacing={1.3}
              fontWeight="700"
              color="#ED565E"
              marginTop="80px"
            >
              TRACKINGTIME TIME TRACKER SOFTWARE
            </Text>
          </Box>
          <Box
            fontSize="18"
            fontWeight="1000"
            color="#242954"
            letterSpacing={2.3}
          >
            <Text>SET AND FORGET TIME TRACKING</Text>
          </Box>
          <Box
            fontSize="68"
            lineHeight={1}
            fontWeight="bold"
            color="#242954"
            width="76%"
            margin="10px auto"
          >
            <Text>Bring your productivity to the next level.</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            width="35vw"
            margin="40px auto"
            gap='30px'
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
          <Box
            display="flex"
            margin="auto"
            width="30vw"
            justifyContent="center"
          >
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
        <Image
          margin="80px auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToXecOOPx3H0tZ4v1uEU-x5n1xtcoWYuwjnNspvWTU0lTvV_PmtRIOCS34LrO5Mc6A2Jg&usqp=CAU"
          width="70px"
        />
        <Box boxShadow="2px 2px 15px rgb(0,0,0,0.2)" backgroundColor="white">
          <Box textAlign="center">
            <Text
              color="#7F8488"
              fontSize="18px"
              fontFamily="font-family: -apple-system,system-ui,BlinkMacSystemFont"
              padding="20px"
            >
              Companies of all shapes and sizes use TrackingTime:
            </Text>
          </Box>
          <Box display="flex" width="100vw" overflow="auto">
            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo3.jpg"></Image>
            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo7.jpg"></Image>
            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo10.jpg"></Image>
            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo4.jpg"></Image>
            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo6.jpg"></Image>
          </Box>
        </Box>
        <Box bg="#f6f8f9">
          <Box width="75vw" margin="auto">
            <Box
              textAlign="center"
              boxSizing="border-box"
              margin="120px auto 60px auto"
            >
              <Text
                fontSize="18px"
                letterSpacing={2}
                fontWeight="800"
                color="#242954"
              >
                THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.
              </Text>
            </Box>
            <Box display="flex" justifyContent="space-between" gap="15px">
              <Box
                boxShadow="2px 2px 4px rgb(0,0,0,0.2)"
                width="32%"
                bg="white"
              >
                <Image
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-1.svg"
                  width="100%"
                ></Image>
                <Box width="80%" margin="auto" textAlign="center">
                  <Text
                    color="#242954"
                    fontWeight="bold"
                    fontSize="23px"
                    margin="20px auto"
                  >
                    Measure your team’s productivity
                  </Text>
                  <Text color="gray">
                    Get a record of the worked hours and keep your projects in
                    order, be abreast of ongoing or completed projects with our
                    super friendly app.
                  </Text>
                </Box>
              </Box>
              <Box
                boxShadow="2px 2px 4px rgb(0,0,0,0.2)"
                width="32%"
                bg="white"
              >
                <Image
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-2.svg"
                  width="100%"
                ></Image>
                <Box width="80%" margin="auto" textAlign="center">
                  <Text
                    color="#242954"
                    fontWeight="bold"
                    fontSize="23px"
                    margin="20px auto"
                  >
                    The most flexible reporting engine
                  </Text>
                  <Text color="gray">
                    Project budgeting, client billing, payroll, productivity
                    analytics and much more: No matter what kind of reports you
                    need, TrackingTime has got you covered.
                  </Text>
                </Box>
              </Box>
              <Box
                boxShadow="2px 2px 4px rgb(0,0,0,0.2)"
                width="32%"
                bg="white"
              >
                <Image
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-3.svg"
                  width="100%"
                ></Image>
                <Box width="80%" margin="auto" textAlign="center">
                  <Text
                    color="#242954"
                    fontWeight="bold"
                    fontSize="23px"
                    margin="20px auto"
                  >
                    Monitor your team’s workload, in real time
                  </Text>
                  <Text color="gray" marginBottom="60px">
                    See every work in progress and measure the productivity of
                    your team by monitoring them in real time
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box marginTop="50px">
          <Image
            src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/grupo.svg"
            width="40%"
            margin="auto"
          ></Image>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="1fr 2fr"
          gap="45px"
          width="75vw"
          margin="auto"
        >
          <Box>
            <Text
              color="#242954"
              fontWeight="bold"
              fontSize="32px"
              margin="20px auto"
            >
              Add time tracking to your favorite business apps
            </Text>
            <Text color="gray" fontSize="19px">
              No matter where your employees work, TrackingTime works with them.
              Install the TrackingTime Button for Chrome and Firefox and track
              time right within the productivity apps your employees use
              everyday.
            </Text>
            <Button
              backgroundColor="#f6f8f9"
              borderWidth="2px"
              borderColor="#242954"
              width="150px"
              fontSize="13px"
              margin="40px 0"
              height="34px"
            >
              SEE ALL
            </Button>
          </Box>
          <Box display="flex" gap="50px" marginTop="100px">
            <Box>
              <Image
                src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/asana.png"
                width="70px"
              ></Image>
              <Text
                fontSize="23px"
                fontWeight="700"
                color="#242954"
                margin="15px 0"
              >
                Asana
              </Text>
              <Text color="gray" fontSize="14px">
                Asana puts tasks and conversations together to enable teamwork
                without email.
              </Text>
            </Box>
            <Box>
              <Image
                src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/trello.png"
                width="70px"
              ></Image>
              <Text
                fontSize="23px"
                fontWeight="700"
                color="#242954"
                margin="15px 0"
              >
                Trello
              </Text>
              <Text color="gray" fontSize="14px">
                Trello is a collaboration tool that organizes your projects into
                boards.
              </Text>
            </Box>
            <Box>
              <Image
                src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/todoist.png"
                width="70px"
              ></Image>
              <Text
                fontSize="23px"
                fontWeight="700"
                color="#242954"
                margin="15px 0"
              >
                Todoist
              </Text>
              <Text color="gray" fontSize="14px">
                Todoist is a task manager thats useful, fast and easy to use.
              </Text>
            </Box>
            <Box>
              <Image
                src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/smartsheet.png"
                width="70px"
              ></Image>
              <Text
                fontSize="23px"
                fontWeight="700"
                color="#242954"
                margin="15px 0"
              >
                Smartsheet
              </Text>
              <Text color="gray" fontSize="14px">
                Smartsheet is a web-based project and task management and work
                collaboration software.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          backgroundColor="white"
          padding="80px 10px"
          boxShadow="2px 2px 10px rgb(0,0,0,0.2)"
        >
          <Box
            display="flex"
            gap="20px"
            justifyContent="space-between"
            width="75vw"
            margin="auto"
          >
            <Box textAlign="center" width="23%">
              <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-1.svg"></Image>
              <Text
                fontSize="23px"
                fontWeight="700"
                color="#242954"
                margin="15px 0"
              >
                Timecards Approval
              </Text>
              <Text color="gray">
                Track clock in and out times with no effort.
              </Text>
            </Box>
            <Box textAlign="center" width="23%">
              <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-2.svg"></Image>
              <Text
                fontSize="23px"
                fontWeight="700"
                color="#242954"
                margin="15px 0"
              >
                Budgeting
              </Text>
              <Text color="gray">Keep your projects on time and budget.</Text>
            </Box>
            <Box textAlign="center" width="23%">
              <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-3.svg"></Image>
              <Text
                fontSize="23px"
                fontWeight="700"
                color="#242954"
                margin="15px 0"
              >
                Work schedules
              </Text>
              <Text color="gray">
                Specify when your employees are expected to be at their job.
              </Text>
            </Box>
            <Box textAlign="center" width="23%">
              <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-4.svg"></Image>
              <Text
                fontSize="23px"
                fontWeight="700"
                color="#242954"
                margin="15px 0"
              >
                Timesheet Audits
              </Text>
              <Text color="gray">
                Avoid data inconsistencies with just one click.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box display="flex" width="70vw" margin="100px auto" gap="140px">
          <Box>
            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/bottom-action.svg"></Image>
          </Box>
          <Box>
            <Text
              color="#242954"
              fontWeight="bold"
              fontSize="32px"
              margin="20px 0px 20px 65px"
            >
              Get professional timesheets done in no time!
            </Text>
            <Text color="gray" marginLeft="65px">
              Sign up today and join thousands of people around the world using
              TrackingTime to simplify their timesheets.
            </Text>
            <Box
              display="flex"
              justifyContent="space-around"
              width="35vw"
              margin="40px auto"
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
            <Box display="flex" marginLeft="65px">
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
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Home;
