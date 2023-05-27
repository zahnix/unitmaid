"use client"

import NextLink from 'next/link'
import {
  Link,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsInstagram, BsTwitter, BsPerson } from 'react-icons/bs';


export default function contact() {
  return (
    <Container bg="#fff" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="white"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading textAlign={'center'}>Contact Our Team</Heading>
                  <Text textAlign={'center'} mt={{ sm: 3, md: 3, lg: 5 }} color="black">
                    Fill up the form to contact us
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }} pb={'-9'}>
                    <VStack spacing={3} alignItems="center" pb={'5'}>
                      <Button
                        size="md"
                        height="48px"
                        width="210px"
                        variant="ghost"
                        color="black"
                        _hover={{ 
                          border: '3px solid green' }}
                        leftIcon={<MdPhone color="green" size="16px" />}>
                        (703)424-2905
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="210px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: '3px solid green' }}
                        leftIcon={<MdEmail color="green" size="16px" />}>
                        support@unitmaid.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="210px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: '3px solid green' }}
                        leftIcon={<MdLocationOn color="green" size="16px" />}>
                        Northern VA
                      </Button>
                    </VStack>
                    <HStack
                    spacing={5}
                    justifyContent={'center'}>
                    <Link as={NextLink} href='https://www.facebook.com/UnitMaid-111388498624712'>
                    <IconButton
                      mr={'5'}
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'green.500' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    </Link>
                    <Link as={NextLink} href='https://www.instagram.com/unitmaid/'>
                    <IconButton
                      mr={'5'}
                      aria-label="instagram"
                      variant="insta"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'green.500' }}
                      icon={<BsInstagram size="28px" />}
                    />
                    </Link>
                    <Link as={NextLink} href='https://twitter.com/unitmaid'>
                    <IconButton
                      aria-label="twitter"
                      variant="twitt"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'green.500' }}
                      icon={<BsTwitter size="28px" />}
                    />
                    </Link>
                  </HStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl isRequired id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <Input type="text" size="lg" />
                        </InputGroup>
                      </FormControl>
                      <FormControl isRequired id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <Input type="text" size="lg" />
                        </InputGroup>
                      </FormControl>
                      <FormControl isRequired id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                          size={'lg'}
                        />
                      </FormControl>
                      <FormControl pl={9} id="name" float="right">
                        <Button
                          variant="solid"
                          bg="green"
                          color="white"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}