import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

export default function AboutUs() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('https://images.unsplash.com/photo-1609143739217-01b60dad1c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                About Us
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Storage Unit Management
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
              UnitMaid™ customized, affordable, and comprehensive storage management solutions prioritize sustainability and accessibility, while delivering exceptional customer service and convenience.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: 'Affordable',
    content: (
      <>
        <StatsText>Storage Cleaning</StatsText> We are committed to providing the highest quality cleaning and organizing services. Our experts team will clean, dust off, or debris that may have accumulated over time
      </>
    ),
  },
  {
    title: 'Comprehensive',
    content: (
      <>
        <StatsText>Unit Organization</StatsText> Maximize the space in your storage unit
        by organizing your belongings in a efficient and logical manner and make it easier for you to access your stored belongings. 
      </>
    ),
  },
  {
    title: 'Regional',
    content: (
      <>
        <StatsText>Relocation Assistance</StatsText> Whether you are moving your belongings into or out of storage,
         we can help make the process quick and easy.
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Pickup Services</StatsText> We will come to your home or office to pick up any items you need to store, so you do not have to worry about transporting them yourself.
      </>
    ),
  },
];