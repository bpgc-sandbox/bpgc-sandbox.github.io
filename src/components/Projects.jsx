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
import bg from '../assets/projects.jpg';
import { projects } from '../utils/projects';
import Cards from './Cards';

function Projects() {
  const { state } = usePage();
  return (
    state.proj && (
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
            as={motion.div}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
          >
            <Heading textAlign="center">Projects</Heading>
            <Text>These are some of our projects</Text>
          </Stack>
        </Box>
        <Center>
          <SimpleGrid
            marginTop="2rem"
            spacing="40px"
            columns={{ base: 1, md: 3 }}
          >
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
      </motion.div>
    )
  );
}

export default Projects;
