"use client"

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

export default function SignUpPage() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to manage your <Link color={'green.400'}> UnitMaid </Link>services 🚚
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox  colorScheme='green' iconColor='white.400'>Remember me</Checkbox>
                <Link color={'green.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'gray.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}>
                Sign in
              </Button>
            </Stack>
            <Center>
              <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
                {/* Facebook */}
              <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
              <Center>
              <Text>Continue with Facebook</Text>
              </Center>
              </Button>

              {/* Google */}
              <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
              <Center>
              <Text>Sign in with Google</Text>
              </Center>
              </Button>
              </Stack>
              </Center>
            <Stack pt={6}>
              <Text align={'center'}>
                No account? <Link as={"a"} href="/signup" color={'green.400'}>Register</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}