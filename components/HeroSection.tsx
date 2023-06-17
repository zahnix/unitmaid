import NextLink from 'next/link'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.500',
                zIndex: -1,
              }}>
              UNCLUTTERED
            </Text>
            <br />{' '}
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.500',
                zIndex: -1,
              }}>
              STORAGE
            </Text>
            <br />{' '}
            <Image
              paddingTop={4}
              alt={'Logo Image'}
              objectFit={'cover'}
              src={ "https://i.yourimageshare.com/qULrgtX6yN.webp"}
              width={300}
              height={100}
        />
          </Heading>
          <Text paddingTop={-2}fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The Clean out, and Organization service for Garages, Storage Units, Warehouses, and Offices.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link as={NextLink} href='/quote'>
            <Button
              rounded={'full'}
              bg={'gray.500'}
              color={'white'}
              _hover={{
                bg: 'green.600',
              }}>
              Get a Quote
            </Button>
            </Link>
            <Link as={NextLink} href='/services'>
            <Button rounded={'full'}>Transform Your Unit</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Hero Image'}
          objectFit={'scale-down'}
          src={ "https://i.ibb.co/f0sP9zX/abhishekdigital-cleaning-services-men-in-home-1b0022d6-339d-4c9e-93ea-490d17513267.png"}
        />
      </Flex>
    </Stack>
  );
}