import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcOrganization,
  FcAssistant,
  FcFilingCabinet,
  FcGlobe,
  FcDownRight,
  FcShipped,
} from 'react-icons/fc';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Services() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} align={'center'} textAlign={'center'}>
        <Image
          alt={'Logo Image'}
          objectFit={'cover'}
          src={ "https://i.yourimageshare.com/qULrgtX6yN.webp"}
          width={300}
          content='center'
        />
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        UnitMaid provides a variety of storage management services, 
        including unit cleaning, organization, and relocation. 
        We also offer a pick-up service to add more items to the storage unit. 
        Our services are designed to help individuals and businesses efficiently manage their storage needs.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Storage Unit Cleaning and Organization'}
            icon={<Icon as={FcOrganization} w={10} h={10} />}
            description={
              'We Offer professional cleaning services to ensure your units are always clean and free of dust, dirt, and debris. Our team of experts uses high-quality products and equipment to ensure that your storage unit is spotless and will categorize and arrange items according to your preferences and needs.'
            }
            href={'#'}
          />
          <Card
            heading={'Storage Unit Inventory Management'}
            icon={<Icon as={FcFilingCabinet} w={10} h={10} />}
            description={
              'We keep track of the items in your storage unit. This includes creating an inventory list and periodically checking to ensure that all items are accounted for. We also offer specialized document storage that includes secure document storage, shredding and disposal, and retrieval services.'
            }
            href={'#'}
          />
          <Card
            heading={'Storage Unit Relocation'}
            icon={<Icon as={FcDownRight} w={10} h={10} />}
            description={
              'We provide a hassle-free storage unit relocation service for customers who need to move their items to a new storage unit. Our team of professional movers will handle all aspects of the relocation process, from packing and loading to transport and unloading'
            }
            href={'#'}
          />
          <Card
            heading={'Storage Pick-up service'}
            icon={<Icon as={FcShipped} w={10} h={10} />}
            description={
              'We make it easy for you to add items to your storage unit without having to worry about transportation or heavy lifting. Whether you have new items to store or just need to rearrange your existing items, our team can help.'
            }
            href={'#'}
          />
          <Card
            heading={'Donations, Recycling and Disposal'}
            icon={<Icon as={FcGlobe} w={10} h={10} />}
            description={
              'We assist customers with the removal of heavy or bulky items(furniture, appliances, and other large items). Recycling and disposal services for customers who need to dispose of unwanted items or materials.'
            }
            href={'#'}
          />
          <Card
            heading={'Specialty Services'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              'We offer specialty services like consignment, Locksmith and key management. Pest control inspections and treatments to prevent and eliminate pests and Package acceptance and delivery services for customers who need to receive or send packages to their storage unit.'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}