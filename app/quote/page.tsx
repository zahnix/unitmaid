"use client"

import React, { useState } from 'react';

import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Radio,
  RadioGroup,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Divider,
  VStack,
  HStack,
  Text,
  Checkbox,
  CheckboxGroup,
  Stack,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
      Contact Information
      </Heading>
      
      <Flex>
        <FormControl isRequired mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl isRequired mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We will never share your email.</FormHelperText>
      </FormControl>

      <FormControl isRequired mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Phone Number
        </FormLabel>
        <Input id="phone" type="phone" />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          pt={4}
          htmlFor="region"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Northern Virginia Region
        </FormLabel>
        <Select
          id="region"
          name="region"
          autoComplete="region"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>Alexandria</option>
          <option>Arlington</option>
          <option>Clarke</option>
          <option>Culpeper</option>
          <option>Fairfax</option>
          <option>Fairfax City</option>
          <option>Falls Church</option>
          <option>Fauquier</option>
          <option>Frederick</option>
          <option>Fredericksburg</option>
          <option>Loundon</option>
          <option>Madison</option>
          <option>Manassas</option>
          <option>Manassas Park</option>
          <option>Prince William</option>
          <option>Rappahannock</option>
          <option>Spotsylvania</option>
          <option>Stafford</option>
          <option>Warren</option>
          <option>Winchester</option>
        </Select>
      </FormControl>

      <FormControl isRequired as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Unit address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl isRequired as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl isRequired as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Service Details
      </Heading>

      <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          pt={4}
          htmlFor="unitSize"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Select Storage Size
        </FormLabel>
        <Select
          id="unitSize"
          name="unitSize"
          autoComplete="unitSize"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>5x5 ft -- 25 sqft</option>
          <option>5x10 ft -- 50 sqft</option>
          <option>10x10 ft -- 100 sqft</option>
          <option>10x15 ft -- 150 sqft</option>
          <option>10x20 ft -- 200 sqft</option>
          <option>10x25 ft -- 250 sqft</option>
          <option>10x30 ft -- 300 sqft</option>
          <option>1 Car Garage 12x25 ft -- 300 sqft</option>
          <option>2 Car Garage 24x25 ft -- 600 sqft</option>
          <option>Office</option>
          <option>Warehouse</option>
        </Select>
      </FormControl>

      <FormControl as='fieldset'>
        <FormLabel pt={4}
          htmlFor="unitType"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Storage Type
        </FormLabel>
        <RadioGroup colorScheme='green' defaultValue='Indoor'>
        <HStack spacing='24px'>
          <Radio value='Indoor'>Indoor</Radio>
          <Radio value='Outdoor'>Outdoor</Radio>
          <Radio value='Drive Up'>Drive up</Radio>
          <Radio value='Self Storage'>Self Storage</Radio>
        </HStack>
        </RadioGroup>
      </FormControl>
      
      <FormControl as='fieldset'>
        <FormLabel pt={4}
          htmlFor="unitType"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Unit Detail
        </FormLabel>
      <CheckboxGroup colorScheme='green' defaultValue={['24hr', 'cc']}>
        <Stack spacing={[2, 4]} direction={['column', 'row']}>
        <Checkbox value='24hr'>24hr</Checkbox>
        <Checkbox value='cc'>Climate</Checkbox>
        <Checkbox value='ag'>Above Ground</Checkbox>
        <Checkbox value='elavator'>Elevators</Checkbox>
        <Checkbox value='electricity'>Power</Checkbox>
        </Stack>
      </CheckboxGroup>
      </FormControl>

      <FormControl isRequired as='fieldset'>
        <FormLabel pt={4}
          htmlFor="unitType"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Rate Preference
        </FormLabel>
        <RadioGroup colorScheme='green' defaultValue='Flat'>
        <HStack spacing='24px'>
          <Radio value='Flat'>Flat Fee</Radio>
          <Radio value='Hourly'>Hourly</Radio>
        </HStack>
        </RadioGroup>
      </FormControl>

      <FormControl isRequired as='fieldset'>
        <FormLabel pt={4}
          htmlFor="unitType"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Service Interested In
        </FormLabel>
      <CheckboxGroup colorScheme='green' defaultValue={['24hr', 'cc']}>
        <Stack spacing={[2, 4]} direction={['column']}>
        <Checkbox value='clean'>Cleaning</Checkbox>
        <Checkbox value='organize'>Organization</Checkbox>
        <Checkbox value='relocate'>Relocation</Checkbox>
        <Checkbox value='inventory'>Iventory Management</Checkbox>
        <Checkbox value='recycle'>Recycling and Disposal</Checkbox>
        <Checkbox value='consign'>Consigment</Checkbox>
        <Checkbox value='document'>Document Store</Checkbox>
        <Checkbox value='heavy'>Heavy Item Removal</Checkbox>
        <Checkbox value='pickup'>Pickup and Store</Checkbox>
        <Checkbox value='keymngt'>Key management</Checkbox>
        <Checkbox value='locksmith'>Locksmith</Checkbox>
        <Checkbox value='pest'>Pest Control</Checkbox>
        </Stack>
      </CheckboxGroup>
      </FormControl>

    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Additional Information
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
      <FormControl isRequired as='fieldset'>
        <FormLabel pt={4}
          htmlFor="unitType"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Rush Service?
        </FormLabel>
        <RadioGroup colorScheme='green' defaultValue='no'>
        <HStack spacing='24px'>
          <Radio value='yes'>Yes</Radio>
          <Radio value='no'>No</Radio>
        </HStack>
        </RadioGroup>
      </FormControl>

      <FormControl isRequired as='fieldset'>
        <FormLabel pt={4}
          htmlFor="unitType"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Project has deadline?
        </FormLabel>
        <RadioGroup colorScheme='green' defaultValue='no'>
        <HStack spacing='24px'>
          <Radio value='yes'>Yes</Radio>
          <Radio value='no'>No</Radio>
        </HStack>
        </RadioGroup>
      </FormControl>

        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Prefer date of service
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="date"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="additional" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Additional details
          </FormLabel>
          <Textarea
            placeholder="Anything else?"
            rows={6}
            size={'lg'}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief Additional Details if needed.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function Quote() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
    <Divider marginBottom={9}/>
      <VStack spacing={2} textAlign="center" marginBottom={6}>
        <Heading as="h1" fontSize="2xl" color={'black'} textDecoration={'underline'}>
        UnitMaid Service Inquiry Form
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        The experts in organization, cleanliness, and all things storage.
        </Text>
      </VStack>
      <Box
        marginBottom={6}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          colorScheme='green'
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="green"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="green"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Quote Submitted.',
                    description: "A UnitMaid Pro will contact you soon.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}