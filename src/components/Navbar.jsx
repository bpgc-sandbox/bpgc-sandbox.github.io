import React, { createContext, useContext, useReducer, useRef } from 'react';
import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Link,
  ListItem,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import { useWindowSize } from 'react-use';
import { FaBars } from 'react-icons/fa';
import Footer from './Footer';
import sandbox from '../assets/SandboxLogo.min.jpg';

function reducer(state, action) {
  switch (action) {
    case 'Home':
      return {
        home: true,
        proj: false,
        mem: false,
        collab: false,
        access: false,
        faq: false,
      };
    case 'Projects':
      return {
        home: false,
        proj: true,
        mem: false,
        collab: false,
        access: false,
        faq: false,
      };
    case 'Members':
      return {
        home: false,
        proj: false,
        mem: true,
        collab: false,
        access: false,
        faq: false,
      };
    case 'Collaborations':
      return {
        home: false,
        proj: false,
        mem: false,
        collab: true,
        access: false,
        faq: false,
      };
    case 'Access':
      return {
        home: false,
        proj: false,
        mem: false,
        collab: false,
        access: true,
        faq: false,
      };
    case 'FAQs':
      return {
        home: false,
        proj: false,
        mem: false,
        collab: false,
        access: false,
        faq: true,
      };
    default:
      return state;
  }
}

const PageContext = createContext();

export function usePage() {
  return useContext(PageContext);
}

function Navbar({ children }) {
  const links = [
    'Home',
    'Projects',
    'Members',
    'Collaborations',
    'Access',
    'FAQs',
  ];
  const { width } = useWindowSize();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const [state, dispatch] = useReducer(reducer, {
    home: true,
    proj: false,
    mem: false,
    collab: false,
    access: false,
    faq: false,
  });

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      <Box
        backgroundColor="#262626"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        height="5rem"
      >
        <Flex alignItems="center">
          <Image src={sandbox} height="4rem" />
          <Link fontSize="2xl" href={window.location.origin} color="white">
            SANDBOX
          </Link>
        </Flex>
        {width > 1000 && (
          <UnorderedList
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            width="40%"
            color="gold"
            listStyleType="none"
          >
            {links.map((link, index) => (
              <ListItem
                cursor="pointer"
                onClick={() => dispatch(link)}
                key={index}
              >
                {link}
              </ListItem>
            ))}
          </UnorderedList>
        )}
        {width <= 1000 && (
          <>
            <IconButton
              icon={<FaBars size="1.5rem" />}
              colorScheme="none"
              ref={btnRef}
              onClick={onOpen}
            />
            <Drawer
              size="md"
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader textAlign="center">SANDBOX</DrawerHeader>
                <DrawerBody>
                  <Center>
                    <UnorderedList listStyleType="none">
                      {links.map((link, index) => (
                        <ListItem
                          key={index}
                          marginTop="3rem"
                          cursor="pointer"
                          onClick={() => {
                            onClose();
                            dispatch(link);
                          }}
                        >
                          {link}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Center>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Box>
      {children}
      <Footer />
    </PageContext.Provider>
  );
}

export default Navbar;
