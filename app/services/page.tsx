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
              Storage Unit Management and Clean out and Organizations Solutions
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
                We are a Northern Virginia professional storage clean out service company that offers a range of services to help you manage your storage unit, garage, warehouse, and office. UnitMaid provides comprehensive solutions tailored to the specific needs of each client. Whether it is cleaning out clutter, categorizing and organizing items, or relocating belongings to a new unit, UnitMaid aims to simplify the storage management process and provide a hassle-free experience for our customers. 
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
                  Unit Clean out
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Unit Organizing
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Unit Relocation
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Unit Recycling and Disposal
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Unit Pickup and Store
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Unit Iventory Management
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
                  <ListItem>Unit Consigment</ListItem>
                  <ListItem>Unit Locksmith</ListItem>{' '}
                  <ListItem>Unit Key Management</ListItem>
                  <ListItem>Unit Pest Control</ListItem>
                  <ListItem>Unit Heavy Item Removal</ListItem>
                  <ListItem>Unit Document Store</ListItem>
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
              Frequently Asked Question(FAQs)
            </Heading>
        <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Can UnitMaid help with packing and unpacking items in the storage unit?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Yes, our team can assist with packing and unpacking items in your storage unit, ensuring they are properly organized and protected.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Does UnitMaid offer assistance with inventory management for the storage unit?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Yes, we can help you create and maintain an inventory list of the items stored in your unit for easy tracking and retrieval.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Are there any additional fees or charges I should be aware of?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Our pricing structure is comprehensive, and there are no hidden fees or additional charges. The quoted price covers the services specified.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Do I need to be present at the storage unit during the service?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    It is not necessary for you to be present during the service. We can coordinate access with the storage facility, ensuring a convenient experience.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        How long does a typical service session take?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    The duration of a service session depends on the size of the storage unit and the specific requirements. We strive to complete the service efficiently.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Can UnitMaid accommodate special requests or specific cleaning preferences?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Yes, we are flexible and can accommodate special requests or specific cleaning preferences to meet your needs and preferences.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        How do I book a service with UnitMaid? Is there an online booking system?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    You can easily book a service with UnitMaid by visiting our website or contacting our customer service. We have a user-friendly online booking system for your convenience.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        How do I book a service with UnitMaid using the online booking system?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    To be able to book online, register and create an account. Once the account has been verified, you will be able to use the online booking system.
    </AccordionPanel>
  </AccordionItem>
        </Accordion>
        </Stack>
    </Container>
  );
}