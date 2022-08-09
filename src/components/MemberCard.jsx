import { Box, Flex, IconButton, Image, Text, useToast } from '@chakra-ui/react';
import { FaPhone, FaEnvelopeOpen, FaLinkedin, FaLink } from 'react-icons/fa';
import React from 'react';

function MemberCard({
  name,
  image,
  mobile = null,
  email = null,
  linkedIn = null,
  url = null,
  coordi = false,
}) {
  const toast = useToast();
  function copy(text) {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to clipboard',
      description: text,
      status: 'success',
      position: 'top',
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <Box border="1px">
      <Image
        height="18.75rem"
        width="15rem"
        src={image}
        borderBottomLeftRadius="2px"
        borderBottomRightRadius="2px"
      />
      <Box background="whitesmoke" paddingTop="1">
        <Text textAlign="center" color={coordi ? 'gold' : ''}>
          {name}
        </Text>
        <Flex justifyContent="center">
          {mobile && (
            <IconButton
              color="black"
              colorScheme="none"
              onClick={() => copy(mobile)}
              icon={<FaPhone />}
            />
          )}
          {email && (
            <IconButton
              color="black"
              colorScheme="none"
              onClick={() => copy(email)}
              icon={<FaEnvelopeOpen />}
            />
          )}
          {linkedIn && (
            <IconButton
              color="black"
              colorScheme="none"
              onClick={() => window.open(linkedIn, '_blank')}
              icon={<FaLinkedin />}
            />
          )}
          {url && (
            <IconButton
              color="black"
              colorScheme="none"
              onClick={() => window.open(url, '_blank')}
              icon={<FaLink />}
            />
          )}
        </Flex>
      </Box>
    </Box>
  );
}

export default MemberCard;
