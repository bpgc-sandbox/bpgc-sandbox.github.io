import React from 'react';
import { usePage } from './Navbar';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';
import { faq } from '../utils/faqs';
import { useWindowSize } from 'react-use';

function Faq() {
  const { state } = usePage();
  const { width } = useWindowSize();
  return (
    state.faq && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Container marginTop="3rem" maxWidth="container.lg">
          <Heading color="teal">Frequently Asked Questions</Heading>
          <Accordion padding="2rem" allowToggle>
            {faq.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton height={width > 600 ? '5rem' : 'auto'}>
                    <Box flex="1" textAlign="left" color="gold" fontSize="xl">
                      {item.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize="lg" pb={4}>
                  {item.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </motion.div>
    )
  );
}

export default Faq;
