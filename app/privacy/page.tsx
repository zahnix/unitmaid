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
import { MdLocalShipping } from 'react-icons/md';

export default function Privacy() {
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
              Privacy Policy - Last updated on May 20, 2023
            </Text>
            <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
                pt={'8'}>
                Table of Contents
              </Text>
                <List spacing={2}>
                  <ListItem>Introduction</ListItem>
                  <ListItem>What information do we collect?</ListItem>
                  <ListItem>How do we collect this information?</ListItem>{' '}
                  <ListItem>Why do we collect this information?</ListItem>
                  <ListItem>How do we share your information?</ListItem>
                  <ListItem>Your information choices and control</ListItem>{' '}
                  <ListItem>Data security</ListItem>
                  <ListItem>Contact Us</ListItem>{' '}
                </List>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <Box>
            <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                1. INTRODUCTION
              </Text>
              <Text fontSize={'lg'}>
              This privacy policy describes our procedures on the collection, use and disclosure of your personal information when you use the service. The information we may collect through your use of our services; the choices you have regarding our use of your personal information; and how to contact us regarding our privacy practices.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                2. WHAT INFORMATION DO WE COLLECT?
              </Text>
              <Text fontSize={'lg'}>
              We collect different types of information from you pertinent to fulfilling your requests:
              </Text>
              <List pt={'4'} spacing={2}>
                  <ListItem>- Identification Info: name, address, email, phone.</ListItem>
                  <ListItem>- Customer Records: records of the services you have purchased, quotes you have submitted.</ListItem>
                  <ListItem>- Financial Information: debit or credit card information, bank account, signatures, billing address.</ListItem>{' '}
                  <ListItem>- Correspondence: information privided when you call, email, or write to us, respond to survey, feedback request, or promotion.</ListItem>
                  <ListItem>- Internet Network Activity: IP address, device information, such as hardware, operating system, browser type, settings, geolocation information.</ListItem>
                </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                3. HOW DO WE COLLECT THIS INFORMATION?
              </Text>
              <Text fontSize={'lg'}>
              We collect Personal Information directly from you, your devices or browser, vendors that assist us in providing our services and running our internal business operations, data analytics providers, advertising networks, suppliers, social media platforms and other data providers.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                4. WHY DO WE COLLECT THIS INFORMATION?
              </Text>
              <Text fontSize={'lg'}>
              we collect the information for the following purposes:
              </Text>
              <List pt={'4'} spacing={2}>
                  <ListItem>- To provide you with, process payment for, and manage services you request.</ListItem>
                  <ListItem>- To provide you with ongoing customer support and effective customer service.</ListItem>
                  <ListItem>- To enable you to provide us with feedback, participate in surveys, and contact us, and for us to contact you.</ListItem>{' '}
                  <ListItem>- To administer promotions you enter, such as a contest or sweepstakes.</ListItem>
                  <ListItem>- To send you communications of interest, such as emails or text messages about ServiceMaster, its affiliates, and franchises and our services.</ListItem>
                  <ListItem>- To personalize your overall experience with the Site.</ListItem>
                  <ListItem>- To customize, measure, and improve our Site, products, services, content, and advertising.</ListItem>
                  <ListItem>- To protect, enforce, or defend the legal rights, privacy, safety, or property of ourselves, our employees, our agents, or others, and to comply with applicable law.</ListItem>
                  <ListItem>- For any other purpose with your consent.</ListItem>
                </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                5. HOW DO WE SHARE YOUR INFORMATION?
              </Text>
              <Text fontSize={'lg'}>
              We may share your Personal Information in the following circumstances:
              </Text>
              <List pt={'4'} spacing={2}>
                  <ListItem>- Service Providers(our service providers): In order to receive services.</ListItem>
                  <ListItem>- Affiliates and Subsidiaries: We may share your Personal Information with companies that we own or control.</ListItem>
                  <ListItem>- Referral Partners: If your request for services is in a location which we do not provide services, we may refer your request to a third party that can help fulfill your request for services.</ListItem>
                  <ListItem>- Third Parties: We may share your Personal Information with companies or individuals outside of UnitMaid who may use your Personal Information for their own purposes.</ListItem>
                </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                6. USE OF COOKIES AND OTHER TECHNOLOGIES
              </Text>
              <Text fontSize={'lg'}>
              When you visit the Site, we may use cookies to automatically collect data about your visit. Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of the Website.
              </Text>
            
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                7. YOUR INFORMATION CHOICES AND CONTROL 
              </Text>
              <Text fontSize={'lg'}>
              You have the right to request to know the specific pieces of Personal Information we have collected about you.
              </Text>
              <List pt={'4'} spacing={2}>
                  <ListItem>- Right to Access and Data Portability: You have the right to confirm whether we are processing your Personal Data, to access your Personal Data, and to obtain a copy of Personal Data you provided to us in a portable format.</ListItem>
                  <ListItem>- Right to Correct: You have the right to request that we correct inaccuracies in your Personal Data, taking into account the nature of the Personal Data and our purposes for processing it.</ListItem>
                  <ListItem>- Right to Delete: You have the right to request that we delete your Personal Data.</ListItem>
                  <ListItem>- Right to Opt-Out: You have the right to opt out of targeted advertising, sale of Personal Data, and profiling in furtherance of decisions that produce legal or similarly significant effects.</ListItem>
                </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                8. DATA SECURITY
              </Text>
              <Text fontSize={'lg'}>
              We use a variety of standard protections to maintain the security of your online session, and to protect the confidentiality and security of the Personal Information we collect and process. Unfortunately, however, no data transmission over the Internet can be guaranteed to be 100% secure. Although the Site has security measures in place to protect against the loss, misuse and alteration of information under our control, we cannot guarantee that such security measures will be sufficient, will not be breached, and that your information may not be disclosed or otherwise accessed in any unauthorized manner. Certain information may be transmitted to you by electronic mail. Although it may be illegal to intercept or disclose these messages, these transmissions are not secured.
              </Text>
            
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                8. CONTACT US
              </Text>
              <Text fontSize={'lg'}>
              If you have any questions about this Privacy Policy, please contact us toll-free at: 1-703-424-2905. 
              </Text>
              <Text pt={'8'} fontSize={'lg'}>
              Or by mail at: 
              </Text>
              <Text pt={'8'} fontSize={'lg'} fontWeight={'bold'}>
              UnitMaid LLC 
              </Text>
              <Text fontSize={'lg'}>
              PO Box 4
              </Text>
              <Text fontSize={'lg'}>
              Attn: Privacy Requests
              </Text>
              <Text fontSize={'lg'}>
              Fairfax, VA 22038
              </Text>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Stack pt={6} pb={9} direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>We are servicing the Northern VA area</Text>
          </Stack>
    </Container>
  );
}