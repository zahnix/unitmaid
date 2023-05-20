import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import { ArrowForwardIcon, CalendarIcon, StarIcon, TimeIcon } from '@chakra-ui/icons';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Values() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'dark.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('green.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Mission
          </Text>
          <Heading>Your Unit Is In Good Hands</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Our mission is to simplify our customers lives by taking care of their storage needs so they can focus on what matters most to them. We offer a comprehensive range of customizable services that help our customers save time, money, and energy while reducing their environmental footprint.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={StarIcon} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Excellence & Quality'}
            />
            <Feature
              icon={<Icon as={CalendarIcon} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Integrity & Reliability'}
            />
            <Feature
              icon={
                <Icon as={ArrowForwardIcon} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Innovation & Technology'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://i.ibb.co/HHFfm8N/abhishekdigital-cleaning-services-men-in-home-ebcb4caa-bd0f-4451-9066-868411f3353e.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}