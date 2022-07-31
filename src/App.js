import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar><Home /></Navbar>
    </ChakraProvider>
  );
}

export default App;
