import React from 'react';
import { motion } from 'framer-motion';
import { usePage } from './Navbar';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Container,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
} from '@chakra-ui/react';
import bg from '../assets/projects.jpg';

function Collaborate() {
  const { state } = usePage();
  return (
    state.collab && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box
          backgroundAttachment="fixed"
          backgroundImage={bg}
          minHeight="670px"
          backgroundPosition="50% 50%"
          height="calc('100vh - 64px')"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            color="white"
            textAlign="center"
            as={motion.div}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
          >
            <Heading>Collaborate with us!</Heading>
            <Text>We can achieve more if we work together.</Text>
          </Stack>
        </Box>
        <Center>
          <Box marginTop="4rem" width="75%">
            <Text color="teal.300" fontSize="3xl">
              The Sandbox is not only a platform for students to ideate, design
              and innnovate but also a platform which ensures that the
              technological products that different teams develop can be
              utilised in the industry for real-time applications.
            </Text>
            <Text fontSize="xl" marginTop="1rem">
              A purely symbiotic relationship to its core, industry-academia
              collaboration has often produced creative and practical
              technological solutions to address problems present around the
              globe. Therefore, one of the main aims of the Sandbox is to foster
              and improve the industry-academia interaction in BITS Pilani
              University The following are a few of the very many advantages
              that companies will enjoy when they collaborate with Sandbox -
            </Text>
            <OrderedList marginTop="1rem" fontSize="xl" spacing="2rem">
              <ListItem>
                <Text>
                  New solutions to Old problems - There are many problem
                  statements that need a younger and fresher perspective to be
                  solved. Corporates can give these problem statements for our
                  students to work on. The industry-level facilities available
                  along with academic and industry mentors will lead to students
                  coming up with innovative ideas and products that can be
                  employed for real-time application. The cost of creation and
                  resources - human as well as infrastructural will be quite low
                  as the Sandbox provides one with industry-level hardware and
                  software.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Publicity and Larger Reach - The companies that are sponsoring
                  and collaborating with the Sandbox team will be
                  well-publicised through banners and standees around the
                  campus, especially in those places such as the BDome, LT Lawns
                  etc. which are frequented by the students, faculty members,
                  guest speakers, business visitors and more. This would
                  increase the outreach of the company amongst the people,
                  especially students in campus. The same companies will also be
                  featured and mentioned in the official website of the Sandbox
                  which will increase their digital visibility amongst students
                  , faculty members of other colleges and other visitors to the
                  website.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  An option to test before employing - With industrial
                  experience becoming an important part of one's education, the
                  Sandbox provides an excellent opportunity for companies to
                  check whether students are a good fit for them or not. They
                  can assign projects to students a particular project along
                  with deadlines and conditions and then be able to accurately
                  judge his/her capabilities before making an offer.
                </Text>
              </ListItem>
            </OrderedList>
          </Box>
        </Center>
        <Box marginTop="2rem" paddingBottom="1rem" background="whitesmoke">
          <Container paddingTop="2rem" maxWidth="container.lg">
            <Heading color="teal"marginBottom="2rem" fontSize="5xl" textAlign="center">
              Frequently Asked Questions
            </Heading>
            <Accordion spacing="3rem" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      How do you think collaboration with companies help improve
                      the technical culture of our campus?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  A collaboration will be beneficial to all the parties
                  involved. The company will get bright technical assistance at
                  a very low cost, the students will get the experience and
                  training from working on real world projects, and everyone
                  will get more publicity. The ideas from industry are more
                  practical and students and companies can collaborate on
                  solutions and products - the companies willing to sponsor some
                  devices given specific requirements can collaborate with the
                  students who can work on those particular requirements.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      How does the Sandbox set us apart from other colleges and
                      universities in India?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Though Sandbox is still in its early stages, we are able to
                  provide the students will excellent facilities that they have
                  used to their advantage. Students in our campus can now get
                  free access to equipment that others only dream of. The
                  experience gained by the students working in Sandbox has also
                  helped them a lot as is evident by 3 students going for their
                  thesis in Portugal, 1 in USA, 1 in Singapore, 1 for a summer
                  internship in Amazon and another in Navstik Labs and many
                  more.
                  <br />
                  <br />
                  Similar to the fact that a healthy mind lives in a healtyh
                  body, having a facility like Sandbox helps one to do better
                  research and development. We still have a long way to go and
                  we only hope to be comparable if not better to other fablabs
                  in developed countries.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Container>
        </Box>
      </motion.div>
    )
  );
}

export default Collaborate;
