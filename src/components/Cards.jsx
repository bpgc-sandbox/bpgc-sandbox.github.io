import {
  Box,
  Center,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useWindowSize } from 'react-use';

function Cards({ image, title, description, summary }) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { width } = useWindowSize();
  return (
    <Box
      cursor="pointer"
      onClick={onOpen}
      maxW="sm"
      borderWidth="1px"
      marginLeft="2"
      borderRadius="lg"
    >
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        {...(width < 768 && 'isCentered')}
      >
        <ModalOverlay />
        <ModalContent paddingBottom="2rem">
          <ModalHeader textAlign="center" textTransform="uppercase">
            {title}
          </ModalHeader>
          <ModalCloseButton
            onFocus={e => {
              e.target.style.outline = 'none';
              e.target.style.boxShadow = 'none';
            }}
          />
          <ModalBody>
            <Center>
              <Image src={image} height="18rem" width="25rem" maxWidth="100%" />
            </Center>
            <Box marginTop="2rem">
              <Text>{summary.brief}</Text>
              <UnorderedList marginTop="1rem">
                {summary.points.map(point => (
                  <ListItem>
                    <Text>{point}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Image src={image} height="18rem" width="25rem" maxWidth="100%" />
      <Box padding="2" textAlign="justify">
        <Text color="teal" fontSize="xl">
          {title}
        </Text>
        <Text fontSize="lg">{description}</Text>
      </Box>
    </Box>
  );
}

export default Cards;
