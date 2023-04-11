import React from 'react';
import {
  Box,
  Container,
  Heading,
  Highlight,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
} from '@chakra-ui/react';
import { usePage } from './Navbar';
import { motion } from 'framer-motion';
import bg from '../assets/projects.jpg';

function Access() {
  const { state } = usePage();
  return (
    state.access && (
      <motion.div>
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
            <Heading textAlign="center">Sandbox Access</Heading>
            <Text>
              Get access to all Sandbox facilities for a whole semester!
            </Text>
          </Stack>
        </Box>
        <Container maxW="container.lg">
          <Box paddingTop="2rem">
            <Heading color="teal" marginBottom="2rem">
              Proposal
            </Heading>
            <Text fontSize="xl">
              <Highlight query={['proposals']} styles={{ color: 'red' }}>
                Sandbox only accepts proposals for student projects only before
                the start of the semester.
              </Highlight>{' '}
              So the{' '}
              <Link
                color="blue.600"
                href="https://forms.gle/PDcNnJSZQPCc1wMr7"
                target="_blank"
              >
                form
              </Link>{' '}
              would close soon (deadline TBA). So don't delay and fill out the{' '}
              <Link
                color="blue.600"
                href="https://forms.gle/PDcNnJSZQPCc1wMr7"
                target="_blank"
              >
                form
              </Link>{' '}
              soon! And don't worry, even if your project is not a part of
              Sandbox, you can still submit a{' '}
              <Highlight
                query={['request proposal']}
                styles={{ color: 'red' }}
                children={'request proposal'}
              />{' '}
              to use some of the Sandbox facilities in order to to see your
              project to completion. Please read the terms and conditions before
              filling the{' '}
              <Link
                color="blue.600"
                href="https://forms.gle/PDcNnJSZQPCc1wMr7"
                target="_blank"
              >
                form
              </Link>
              .
            </Text>
          </Box>{' '}
          <Box paddingTop="2rem" fontSize="xl">
            <Heading color="red.500" marginBottom="2rem">
              Terms and Conditions
            </Heading>
            <Text>
              Before applying, the following point must be kept in mind:
            </Text>
            <OrderedList padding="1.5rem">
              <ListItem>
                <Text>
                  This facility is only open to students studying in
                  BITS-Pilani, Goa Campus. If you are a student of another
                  college, please mail us for more information.
                </Text>
              </ListItem>
            </OrderedList>
            <Text>
              While uploading you file for project proposal, it should mention
              the following points:
            </Text>
            <OrderedList padding="1.5rem">
              <ListItem>
                <Text>
                  Detailed description of what is your project, how it works and
                  how it would be useful.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  If more than one members are applying, mention their name,
                  their BITS email address, their branch and the year of study.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Explain why do you require Sandbox access for the completion
                  of your project. Mention the list of equipments you would
                  require to see through your project.
                </Text>
              </ListItem>
              <ListItem>
                <Text>Mention the timeline of your project as well.</Text>
              </ListItem>
              <ListItem>
                <Text>The file should be uploaded in PDF format</Text>
              </ListItem>
            </OrderedList>
          </Box>
        </Container>
      </motion.div>
    )
  );
}

export default Access;
