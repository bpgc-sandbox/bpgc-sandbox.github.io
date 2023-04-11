import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { usePage } from './Navbar';
import bg from '../assets/members.jpg';
import MemberCard from './MemberCard';
import { student as students, faculty } from '../utils/members';

function Members() {
  const { state } = usePage();
  return (
    state.mem && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box
          backgroundAttachment="fixed"
          backgroundImage={bg}
          minHeight="670px"
          backgroundPosition="50% 50%"
          height="calc('100vh -
          64px')"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            color="white"
            as={motion.div}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
          >
            <Heading textAlign="center">Members</Heading>
            <Text>
              Connect with the current student and faculty members to know more
              about who we are.
            </Text>
          </Stack>
        </Box>
        <Box marginTop="2rem">
          <Heading textAlign="center" color="teal" fontSize="5xl">
            Student Members
          </Heading>
          <Center>
            <SimpleGrid
              marginTop="2rem"
              spacing="40px"
              columns={{ base: 1, md: 3 }}
            >
              {students.map((student, i) => (
                <MemberCard
                  key={i}
                  name={student.name}
                  image={student.image}
                  mobile={student.mobile}
                  email={student.email}
                  linkedIn={student.linkedIn}
                  coordi={student.coordi}
                />
              ))}
            </SimpleGrid>
          </Center>
        </Box>
        <Box marginTop="2rem">
          <Heading textAlign="center" color="teal" fontSize="5xl">
            Faculty In-Charge
          </Heading>
          <Center>
            <SimpleGrid
              marginTop="2rem"
              spacing="40px"
              columns={{ base: 1 }}
            >
              {faculty.map((prof, i) => (
                <MemberCard
                  key={i}
                  name={prof.name}
                  image={prof.image}
                  url={prof.url}
                />
              ))}
            </SimpleGrid>
          </Center>
        </Box>
      </motion.div>
    )
  );
}

export default Members;
