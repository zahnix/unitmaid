import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const Logo = (props: any) => {
  return (
    <Image
          alt={'Logo Image'}
          objectFit={'cover'}
          src={ "https://i.yourimageshare.com/qULrgtX6yN.webp"}
          width={100}
          content='center'
        />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Clean & Organize</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('red.300', 'red.800')}
                ml={2}
                color={'white'}>
                Hot
              </Tag>
            </Stack>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Iventory Management</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            </Stack>
            <Link href={'#'}>Relocation</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Pick-ups</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                Popular
              </Tag>
            </Stack>
            <Link href={'#'}>Donations & Disposal</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Consignment & Others</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                Coming
              </Tag>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
            <Link href={'#'}>Careers</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('yellow.300', 'yellow.800')}
                ml={2}
                color={'white'}>
                Hiring
              </Tag>
            </Stack>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'https://www.facebook.com/UnitMaid-111388498624712'}>Facebook</Link>
            <Link href={'https://twitter.com/unitmaid'}>Twitter</Link>
            <Link href={'https://www.instagram.com/unitmaid/'}>Instagram</Link>
            <Link href={'https://www.youtube.com/@unitmaid'}>Youtube</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 UnitMaid. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}