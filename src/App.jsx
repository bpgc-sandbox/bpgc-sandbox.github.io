import React, { Suspense, lazy } from 'react';
import { ChakraProvider, extendTheme, Spinner } from '@chakra-ui/react';
import Navbar from './components/Navbar';
const Home = lazy(() => import('./components/Home'));
const Projects = lazy(() => import('./components/Projects'));
const Members = lazy(() => import('./components/Members'));
const Collaborate = lazy(() => import('./components/Collaborate'));
const Access = lazy(() => import('./components/Access'));
const Faq = lazy(() => import('./components/Faq'));
// import Projects from './components/Projects';
// import Members from './components/Members';
// import Collaborate from './components/Collaborate';
// import Access from './components/Access';
// import Faq from './components/Faq';

function App() {
  const theme = extendTheme({
    colors: {
      gold: '#efba6c',
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh',
            }}
          >
            <Spinner size="xl" />
          </div>
        }
      >
        <Navbar>
          <Home />
          <Projects />
          <Members />
          <Collaborate />
          <Access />
          <Faq />
        </Navbar>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
