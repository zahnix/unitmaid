"use client"

import NextLink from 'next/link'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button, 
  Link,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';

export default function Services() {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
          <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://i.ibb.co/tCvLhm3/Daddy-Calypso-Storage-unit-in-the-style-of-3d-cartoon-6b40be5a-0b81-4a9c-b109-e4ca4f068c24.png'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={900}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              UnitMAID
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              Storage Unit Management and Cleaning Solutions
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                We are a Northern Virginia based professional storage cleaning service company that offers a variety of services to help you manage your storage units. 
              </Text>
            </VStack>
            <Box>
            <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Our Core Services
              </Text>
              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Storage Unit Cleaning
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Storage Unit Organizing
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Storage Unit Relocation
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Storage Unit Recycling and Disposal
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Storage Unit Pickup and Store
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Storage Unit Iventory Management
                  </Text>
                </ListItem>
              </List>
            
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Specialty Services
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Storage Unit Consigment</ListItem>
                  <ListItem>Storage Unit Locksmith</ListItem>{' '}
                  <ListItem>Storage Unit key management</ListItem>
                  <ListItem>Storage Unit Pest Control</ListItem>
                  <ListItem>Storage Unit Heavy Item Removal</ListItem>
                  <ListItem>Storage Unit Document Store</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Link as={NextLink} href='/quote'>
            <Button colorScheme='green'>Get a Quote</Button>
            </Link>
          </Stack>
        </Stack>
        
      </SimpleGrid>
        <Stack pt={5} pb={9} direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>We are servicing the Northern Va area</Text>
        </Stack>
        <Stack pb={9}>

        <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Frequently Asked Question
            </Heading>
        <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          How quick do you deliver the service?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Are the price negotiable?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          How often do you pick up documents for shredding?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Are your product Eco-Friendly
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>


        </Accordion>
        </Stack>
    </Container>
  );
}