import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { useWindowSize } from 'react-use';

function Footer() {
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { width } = useWindowSize();
  const toast = useToast();

  async function submitForm() {
    try {
      if (name === '' || email === '' || message === '') {
        toast({
          title: 'Please fill all the fields',
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });
      } else if (EMAIL_REGEX.test(email.toLowerCase()) === false) {
        toast({
          title: 'Please enter a valid email',
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });
      } else if (name.length < 5) {
        toast({
          title: 'Please enter a valid name, greater than 5 characters',
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });
      } else if (message.length < 10) {
        toast({
          title: 'Please enter a valid message, greater than 10 characters',
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });
      } else {
        let res = await fetch(
          `https://formspree.io/f/${import.meta.env.VITE_CODE}`,
          {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
              Accept: 'application/json',
            },
          }
        );
        res = await res.json();
        if (res.error) {
          console.log(res.errors);
          throw Error('An error ocurred while sending the message');
        }
        setName('');
        setEmail('');
        setMessage('');
        toast({
          title: 'Message sent successfully',
          status: 'success',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: 'Something went wrong',
        description: e.message,
        status: 'error',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Box backgroundColor="whitesmoke" marginTop="2rem">
      <Center>
        {width > 768 && (
          <HStack
            justifyContent="space-around"
            alignItems="flex-start"
            paddingTop="1rem"
            paddingBottom="1rem"
            spacing="40px"
          >
            <Stack>
              <Text fontWeight="bold" fontSize="xl">
                Address
              </Text>
              <br />
              <Text>
                C-Wing, LT-1/2 Lawns, BITS-Pilani, K.K. Birla Goa Campus,
              </Text>
              <br />
              <Text>Near NH-17 Bypass road, Zuarinagar</Text>
              <br />
              <Text>Goa, 403726</Text>
            </Stack>
            <Stack align="flex-start">
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="xl"
                marginLeft="4"
              >
                Reach Out
              </Text>
              <Button
                colorScheme="none"
                color="black"
                onClick={e => {
                  navigator.clipboard.writeText('+91 9769037312').then(() =>
                    toast({
                      title: 'Copied to clipboard',
                      status: 'success',
                      position: 'top',
                      duration: 9000,
                      isClosable: true,
                    })
                  );
                }}
                leftIcon={<FaPhone />}
              >
                +91 9769037312
              </Button>
              <Button
                colorScheme="none"
                color="black"
                onClick={e => {
                  navigator.clipboard
                    .writeText('ic.sandbox@goa.bits-pilani.ac.in')
                    .then(() =>
                      toast({
                        title: 'Copied to clipboard',
                        status: 'success',
                        position: 'top',
                        duration: 9000,
                        isClosable: true,
                      })
                    );
                }}
                leftIcon={<FaEnvelope />}
              >
                ic.sandbox@goa.bits-pilani.ac.in
              </Button>
              <Button
                colorScheme="none"
                color="black"
                onClick={() =>
                  window.open('https://www.facebook.com/SandboxBPGC/', '_blank')
                }
                leftIcon={<FaFacebook />}
              >
                FaceBook
              </Button>
              <Button
                colorScheme="none"
                color="black"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/company/sandbox-innovation-lab/about/',
                    '_blank'
                  )
                }
                leftIcon={<FaLinkedin />}
              >
                LinkedIn
              </Button>
              <Button
                colorScheme="none"
                color="black"
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/sandbox_bitsg/',
                    '_blank'
                  )
                }
                leftIcon={<FaInstagram />}
              >
                Instagram
              </Button>
            </Stack>
            <Stack>
              <Text fontWeight="bold" fontSize="xl">
                Contact Us
              </Text>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <FormHelperText>We will not share your email</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Your message"
                  value={message}
                  marginBottom="0.5rem"
                  onChange={e => setMessage(e.target.value)}
                />
              </FormControl>
              <Button colorScheme="teal" onClick={submitForm}>
                Submit
              </Button>
            </Stack>
          </HStack>
        )}
        {width <= 768 && (
          <Stack
            justifyContent="space-around"
            alignItems="flex-start"
            paddingTop="1rem"
            paddingLeft="1rem"
            paddingBottom="1rem"
            spacing="40px"
          >
            <Stack>
              <Text fontWeight="bold" fontSize="xl">
                Address
              </Text>
              <br />
              <Text>
                C-Wing, LT-1/2 Lawns, BITS-Pilani, K.K. Birla Goa Campus,
              </Text>
              <br />
              <Text>Near NH-17 Bypass road, Zuarinagar</Text>
              <br />
              <Text>Goa, 403726</Text>
            </Stack>
            <Stack align="flex-start">
              <Text textAlign="center" fontWeight="bold" fontSize="xl">
                Reach Out
              </Text>
              <Button
                colorScheme="none"
                color="black"
                onClick={e => {
                  navigator.clipboard.writeText('+91 9769037312').then(() =>
                    toast({
                      title: 'Copied to clipboard',
                      status: 'success',
                      position: 'top',
                      duration: 9000,
                      isClosable: true,
                    })
                  );
                }}
                leftIcon={<FaPhone />}
              >
                +91 9769037312
              </Button>
              <Button
                colorScheme="none"
                color="black"
                onClick={e => {
                  navigator.clipboard
                    .writeText('ic.sandbox@goa.bits-pilani.ac.in')
                    .then(() =>
                      toast({
                        title: 'Copied to clipboard',
                        status: 'success',
                        position: 'top',
                        duration: 9000,
                        isClosable: true,
                      })
                    );
                }}
                leftIcon={<FaEnvelope />}
              >
                ic.sandbox@goa.bits-pilani.ac.in
              </Button>
              <Button
                colorScheme="none"
                color="black"
                onClick={() =>
                  window.open('https://www.facebook.com/SandboxBPGC/', '_blank')
                }
                leftIcon={<FaFacebook />}
              >
                FaceBook
              </Button>
              <Button
                colorScheme="none"
                color="black"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/company/sandbox-innovation-lab/about/',
                    '_blank'
                  )
                }
                leftIcon={<FaLinkedin />}
              >
                LinkedIn
              </Button>
              <Button
                colorScheme="none"
                color="black"
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/sandbox_bitsg/',
                    '_blank'
                  )
                }
                leftIcon={<FaInstagram />}
              >
                Instagram
              </Button>
            </Stack>
            <Stack>
              <Text fontWeight="bold" fontSize="xl">
                Contact Us
              </Text>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <FormHelperText>We will not share your email</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Your message"
                  value={message}
                  marginBottom="0.5rem"
                  onChange={e => setMessage(e.target.value)}
                />
              </FormControl>
              <Button colorScheme="teal" onClick={submitForm}>
                Submit
              </Button>
            </Stack>
          </Stack>
        )}
      </Center>
      <Text color="gold" marginTop="3" paddingBottom="3" fontSize='xl' textAlign="center">
        Copyright All Rights Reserved
      </Text>
    </Box>
  );
}

export default Footer;
