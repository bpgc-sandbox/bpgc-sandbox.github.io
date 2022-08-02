import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Members from './components/Members';
import Collaborate from './components/Collaborate';
import Access from './components/Access';
import Faq from './components/Faq';

function App() {
  const theme = extendTheme({
    colors: {
      gold:'#efba6c'
    }
  });
  return (
    <ChakraProvider theme={theme}>
      <Navbar>
        <Home />
        <Projects />
        <Members />
        <Collaborate />
        <Access />
        <Faq />
      </Navbar>
    </ChakraProvider>
  );
}

export default App;
