import { ReactNode } from 'react';
import NextLink from 'next/link'
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Link,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Pricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" color={'green.500'}>
        Simplify your storage with UnitMaid
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        The experts in organization, cleanliness, and all thing storage.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Flat Fee
            </Text>
            <Text fontSize="1xl" color="green.500">
              Starting at
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                150
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /Unit
              </Text>
            </HStack>
            <Text fontSize="1xl" color="green.500">
              Price varies based on unit size
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Cleaning
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Organizing
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Disposal
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
            <Link as={NextLink} href='/quote'>
              <Button w="full" colorScheme="green" variant="outline">
                Request Quote
              </Button>
            </Link>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('green.300', 'green.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
              Hourly Fee
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  70
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /hour
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Cleaning
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Organizing
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Relocation
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Consignment
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Recycling and Disposal
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
              <Link as={NextLink} href='/quote'>
                <Button w="full" colorScheme="green">
                  Request Quote
                </Button>
              </Link>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Subscription
            </Text>
            <Text fontSize="1xl" color="green.500">
              Starting at
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                100
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /Month
              </Text>
            </HStack>
            <Text fontSize="1xl" color="green.500">
              Price based on add-on services
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Documents Storage
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Documents  Shredding
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Inventory Management
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
            <Link as={NextLink} href='/signin'>
              <Button w="full" colorScheme="green" variant="outline">
                Coming Soon
              </Button>
            </Link>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}