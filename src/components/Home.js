import React from 'react';
import {
  Box,
  Heading,
  IconButton,
  Text,
  Flex,
  Image,
  Center,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { usePage } from './Navbar';
import { FaPlayCircle, FaTimes } from 'react-icons/fa';
import bg from '../assets/bulb.jpg';
import about from '../assets/aboutus.png';
import video from '../assets/video.mp4';
import { homeProjects as projects } from '../utils/projects';
import Cards from './Cards';
import { useWindowSize } from 'react-use';

function Home() {
  const { state, dispatch } = usePage();
  const { width } = useWindowSize();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    state.home && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
          <ModalOverlay />
          <ModalContent height="100%">
            <IconButton
              color="white"
              position="absolute"
              right="1"
              top="1"
              colorScheme="none"
              icon={<FaTimes size="1.5rem" />}
              onClick={onClose}
            />
            <iframe
              src={video}
              width="100%"
              height="100%"
              title="Video Player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </ModalContent>
        </Modal>
        <Box
          color="white"
          backgroundImage={bg}
          backgroundPosition="center"
          height="80vh"
          backgroundSize="cover"
          backgroundRepeat="none"
          position="relative"
        >
          <Box
            position="absolute"
            as={motion.div}
            initial={{ x: -250 }}
            animate={{ x: -10 }}
            transition={{ type: 'tween' }}
            top="40%"
            left="15%"
            width="13rem"
          >
            <Heading>Welcome to Sandbox</Heading>
            <Text marginTop="1rem" fontSize="md">
              Sandbox is BITS Goa's Incubation Center which aims to foster
              innovative projects and ideas by providing State-of-the-Art
              facilities and guidance to the students.
            </Text>
            <Flex alignItems="center" marginTop="1rem">
              <IconButton
                onClick={onOpen}
                fontSize="4xl"
                colorScheme="none"
                icon={<FaPlayCircle />}
              />
              <Text marginLeft="1">Watch the video</Text>
            </Flex>
          </Box>
        </Box>
        <Center marginTop="2rem">
          <Flex width="60%" flexDirection={width > 800 ? 'row' : 'column'}>
            <Box>
              <Heading color="teal " fontSize="6xl">
                About Us
              </Heading>
              <Text marginTop="2rem" fontSize="lg">
                If innovation makes you tick, if wanting to make a change in the
                society with your engineering skills is your dream, the Sandbox
                provides you with the perfect platform for it. Well-equipped
                with industry-standard facilities, the lab provides BITS
                Pilani’s students with a conducive environment to work upon the
                next world- changing idea. The best project ideas, practical
                enough to be incorporated into the industry and with the
                potential to make a difference are chosen through a selection
                procedure and the student teams get 24*7 access to the lab
                facility to make their ideas a reality.
                <br />
                <br />
                Set up with the aim to provide the best resources, to bridge the
                gap between academia and industry and to foster real- time
                problem-solving skills and learning in our students the Sandbox
                has seen it all - successful projects, patents and startups.
              </Text>
            </Box>
            <Image
              as={motion.img}
              src={about}
              marginTop="7rem"
              height="20rem"
              initial={{ x: -250 }}
              animate={{ x: -10 }}
              transition={{ type: 'tween' }}
            />
          </Flex>
        </Center>
        <Box textAlign="center" marginTop="6rem">
          <Heading color="teal " fontSize="6xl">
            Projects
          </Heading>
          <br />
          <Text>
            A plethora of projects are presently being worked on in the Sandbox
            Labs.
          </Text>
          <br />
          <Center>
            <SimpleGrid spacing="40px" columns={{ base: 1, md: 3 }}>
              {projects.map((project, i) => (
                <Cards
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  summary={project.summary}
                  key={i}
                />
              ))}
            </SimpleGrid>
          </Center>
          <br />
          <Text>
            View more{' '}
            <Text
              display="inline"
              cursor="pointer"
              onClick={() => dispatch('Projects')}
              color="gold"
            >
              projects
            </Text>
          </Text>
        </Box>
      </motion.div>
    )
  );
}

export default Home;
