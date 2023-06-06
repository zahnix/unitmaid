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
              pb={2}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              UnitMAID
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'1xl'}>
              TERMS OF SERVICE
            </Text>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              pb={3}
              fontSize={'xl'}>
              Last updated on June 5, 2023
            </Text>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              AGREEMENT TO OUR LEGAL TERMS
            </Text>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'md'}>
              We are UnitMaid, a company registered in Virginia, United States at 12264 Turkey Wing Ct, Reston, VA 20191. We operate the website <a href='https://www.unitmaid.com'>https://www.unitmaid.com</a>, as well as any other related products and services that refer or link to these legal terms. we provide a range of services designed to help customers maintain clean, organized, and functional storage spaces. You can contact us by phone at 7034242905, email at support@unitmaid.com, or by mail to 12264 Turkey Wing Ct, Reston, VA 20191, United States. These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (you), and UnitMaid LLC, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY. Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the Last updated date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.We recommend that you print a copy of these Legal Terms for your records
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
                  <ListItem>1. Our Services</ListItem>
                  <ListItem>2. Intellectual Property Rights</ListItem>
                  <ListItem>3. User Representations</ListItem>{' '}
                  <ListItem>4. Purschases and Payment</ListItem>
                  <ListItem>5. Policy</ListItem>
                  <ListItem>6. Prohibited Activities</ListItem>{' '}
                  <ListItem>7. User Generated Contributions</ListItem>
                  <ListItem>8. Contribution License</ListItem>{' '}
                  <ListItem>9. Third-Party Websites and Content</ListItem>
                  <ListItem>10. Services Management</ListItem>
                  <ListItem>11. Privacy Policy</ListItem>{' '}
                  <ListItem>12. Term and Termination</ListItem>
                  <ListItem>13. Modifications and Interruptions</ListItem>
                  <ListItem>14. Governing Law</ListItem>{' '}
                  <ListItem>15. Dispute Resolution</ListItem>
                  <ListItem>16. Corrections</ListItem>{' '}
                  <ListItem>17. Disclaimer</ListItem>
                  <ListItem>18. Limitation of Liability</ListItem>
                  <ListItem>19. Indemnification</ListItem>{' '}
                  <ListItem>20. User Data</ListItem>
                  <ListItem>21. Electronic Communications, Transaction, and Signatures</ListItem>
                  <ListItem>22. Miscellaneous</ListItem>{' '}
                  <ListItem>23. Contact Us</ListItem>{' '}
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
                1. OUR SERVICES
              </Text>
              <Text fontSize={'lg'}>
              The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
              </Text>
              <List pt={'4'} spacing={2}>
                  <ListItem>- OSHA</ListItem>
                  <ListItem>- NIOSH</ListItem>
                  <ListItem>- CDC</ListItem>
                  <ListItem>- EPA</ListItem>
                </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                2. INTELLECTUAL PROPERTY RIGHTS
              </Text>
              <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              pb={3}
              fontSize={'xl'}>
              Our intellectual property
            </Text>
              <Text pb={4} fontSize={'lg'}>
              We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the Content), as well as the trademarks, service marks, and logos contained therein (the Marks). Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.The Content and Marks are provided in or through the Services AS IS for your personal, non-commercial use or internal business purpose only.
              </Text>
              <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              pb={3}
              fontSize={'xl'}>
              Your use of our Services
            </Text>
            <Text pb={2} fontSize={'lg'}>
            Subject to your compliance with these Legal Terms, including the (PROHIBITED ACTIVITIES) section below, we grant you a non-exclusive, non-transferable, revocable license to:
              </Text>
              <List pt={'4'} pb={'4'} spacing={2}>
                  <ListItem>- access the Services; and</ListItem>
                  <ListItem>- download or print a copy of any portion of the Content to which you have properly gained access.</ListItem>
                </List>
                <Text pb={2} fontSize={'lg'}>
                solely for your personal, non-commercial use or internal business purpose.Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced,aggregated, republished, uploaded, posted, publicly displayed, encoded,translated, transmitted, distributed, sold, licensed, or otherwise exploitedfor any commercial purpose whatsoever, without our express prior written permission. If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: support@unitmaid.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content. We reserve all rights not expressly granted to you in and to the Services, Content, and Marks. Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                3. USER REPRENSATION
              </Text>
              <Text fontSize={'lg'}>
              By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not under the age of 13; (3) you are not a minor in the jurisdiction in which you reside, or if a minor, you havereceived parental permission to use the Services; (4) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (5) you will not use the Services for any illegal or unauthorized purpose; and (6) your use of the Services will not violate any applicable law or regulation.If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                4. PURCHASES AND PAYMENT
              </Text>
              <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              pb={3}
              fontSize={'xl'}>
              We accept the following forms of payment:
            </Text>
              <List pt={'4'} spacing={2}>
                  <ListItem>- Cash</ListItem>
                  <ListItem>- Visa</ListItem>
                  <ListItem>- Mastercard</ListItem>
                  <ListItem>- American Express</ListItem>
                  <ListItem>- Discover</ListItem>
                  <ListItem>- Paypal</ListItem>
                  <ListItem>- Venmo</ListItem>
                  <ListItem>- Cash App</ListItem>
                </List>
                <Text pt={'4'} fontSize={'lg'}>
                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars. You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. If your order is subject to recurring charges, then you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('green.500', 'green.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                5. POLICY
              </Text>
              <Text fontSize={'lg'}>
              All sales are final and no refund will be issued.
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