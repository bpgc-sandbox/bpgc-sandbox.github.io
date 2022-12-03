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
import { collabFaq as faqs } from '../utils/faqs';
import bg from '../assets/projects.jpg';
import { useWindowSize } from 'react-use';

function Collaborate() {
  const { state } = usePage();
  const { width } = useWindowSize();
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
              and innovate but also a platform which ensures that the
              technological products that different teams develop can be
              utilized in the industry for real-time applications.
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
                  solved. Corporate can give these problem statements for our
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
                  well-publicized through banners and standees around the
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
            <Heading
              color="teal"
              marginBottom="2rem"
              fontSize="5xl"
              textAlign="center"
            >
              Frequently Asked Questions
            </Heading>
            <Accordion spacing="3rem" allowToggle>
              {faqs.map((faq, i) => (
                <AccordionItem key={i}>
                  <h2>
                    <AccordionButton height={width > 600 ? '4rem' : 'auto'}>
                      <Box flex="1" textAlign="left">
                        <Text color="gold" fontSize="xl">
                          {faq.question}
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel whiteSpace="pre-line" pb={4} fontSize="lg">
                    {faq.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Box>
      </motion.div>
    )
  );
}

export default Collaborate;
