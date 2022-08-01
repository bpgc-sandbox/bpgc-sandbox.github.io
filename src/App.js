import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Members from './Components/Members';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar>
        <Home />
        <Projects />
        <Members />
      </Navbar>
    </ChakraProvider>
  );
}

export default App;
