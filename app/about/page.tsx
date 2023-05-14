"use client"

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

export default function About() {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
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
                We are a professional cleaning service Company that takes care of our customers storage needs. 
              </Text>
            </VStack>
            <Box>
            <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Our Mission
              </Text>
              <Text fontSize={'lg'}>
              To provide customized, affordable, and comprehensive storage management solutions that prioritize sustainability and accessibility, while delivering exceptional customer service and convenience.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Our Vision
              </Text>
              <Text fontSize={'lg'}>
              To be the leading storage management company, offering a comprehensive range of customizable services that help our customers save time, money, and energy, while reducing their environmental footprint.
              </Text>
            
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Our Values
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Excellence</ListItem>
                  <ListItem>Quality</ListItem>{' '}
                  <ListItem>Integrity</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Reliability</ListItem>
                  <ListItem>Innovation</ListItem>
                  <ListItem>Technology</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Stack pt={6} pb={9} direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>We are servicing the Northern Va area</Text>
          </Stack>
    </Container>
  );
}