"use client"

import React, { useRef, useState } from "react"
import * as Yup from "yup"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore"
import { FormikProps, useFormik } from "formik"
import { v4 } from "uuid"

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
  InputGroup,
  Textarea,
  FormHelperText,
  Divider,
  VStack,
  HStack,
  Text,
  Checkbox,
  CheckboxGroup,
  Stack,
  FormErrorMessage,
  Image,
  CloseButton,
} from "@chakra-ui/react"

import { useToast } from "@chakra-ui/react"

import { storage, db } from "../firebase"

type FormInitialValues = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  region: string
  streetAddress: string
  city: string
  state: string
  zip: string

  unitSize: string
  unitType: string
  unitDetail: string[]
  ratePreference: string
  serviceInterestedIn: string[]

  rushService: string
  projectDeadline: string
  dateOfService: string
  additionalDetail: string
  images: File[]
}

const formInitialValues: FormInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  region: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",

  unitSize: "",
  unitType: "Indoor",
  unitDetail: ["24hr", "cc"],
  ratePreference: "Flat",
  serviceInterestedIn: ["clean"],

  rushService: "no",
  projectDeadline: "no",
  dateOfService: "",
  additionalDetail: "",
  images: [],
}

const Form1 = ({ formik }: { formik: FormikProps<FormInitialValues> }) => {
  const [show, setShow] = React.useState(false)

  const handleClick = () => setShow(!show)

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Contact Information
      </Heading>

      <Flex>
        <FormControl
          isRequired
          mr="5%"
          isInvalid={
            Boolean(formik.errors.firstName) && formik.touched.firstName
          }
        >
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            name="firstName"
            onBlur={formik.handleBlur}
          />
          {Boolean(formik.errors.firstName) && formik.touched.firstName && (
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isRequired
          isInvalid={Boolean(formik.errors.lastName) && formik.touched.lastName}
        >
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            placeholder="First name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="lastName"
          />
          {Boolean(formik.errors.lastName) && formik.touched.lastName && (
            <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
          )}
        </FormControl>
      </Flex>
      <FormControl
        isRequired
        mt="2%"
        isInvalid={Boolean(formik.errors.email) && formik.touched.email}
      >
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
        />
        {Boolean(formik.errors.email) && formik.touched.email && (
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        )}
        <FormHelperText>We will never share your email.</FormHelperText>
      </FormControl>

      <FormControl
        isRequired
        mt="2%"
        isInvalid={
          Boolean(formik.errors.phoneNumber) && formik.touched.phoneNumber
        }
      >
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Phone Number
        </FormLabel>
        <Input
          id="phone"
          type="phone"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="phoneNumber"
        />
        {Boolean(formik.errors.phoneNumber) && formik.touched.phoneNumber && (
          <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          pt={4}
          htmlFor="region"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
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
          rounded="md"
          onChange={formik.handleChange}
          value={formik.values.region}
        >
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

      <FormControl
        isRequired
        as={GridItem}
        colSpan={6}
        isInvalid={
          Boolean(formik.errors.streetAddress) && formik.touched.streetAddress
        }
      >
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Unit address
        </FormLabel>
        <Input
          type="text"
          name="streetAddress"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formik.values.streetAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {Boolean(formik.errors.streetAddress) &&
          formik.touched.streetAddress && (
            <FormErrorMessage>{formik.errors.streetAddress}</FormErrorMessage>
          )}
      </FormControl>

      <FormControl
        isRequired
        as={GridItem}
        colSpan={[6, 6, null, 2]}
        isInvalid={Boolean(formik.errors.city) && formik.touched.city}
      >
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
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
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {Boolean(formik.errors.city) && formik.touched.city && (
          <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
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
          value={formik.values.state}
          onChange={formik.handleChange}
        />
      </FormControl>

      <FormControl
        isRequired
        as={GridItem}
        colSpan={[6, 3, null, 2]}
        isInvalid={Boolean(formik.errors.zip) && formik.touched.zip}
      >
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="zip"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formik.values.zip}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {Boolean(formik.errors.zip) && formik.touched.zip && (
          <FormErrorMessage>{formik.errors.zip}</FormErrorMessage>
        )}
      </FormControl>
    </>
  )
}

const Form2 = ({ formik }: { formik: FormikProps<FormInitialValues> }) => {
  // console.log(formik.errors)
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Service Details
      </Heading>

      <FormControl
        isRequired
        as={GridItem}
        colSpan={[6, 3]}
        isInvalid={Boolean(formik.errors.unitSize) && formik.touched.unitSize}
      >
        <FormLabel
          pt={4}
          htmlFor="unitSize"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
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
          rounded="md"
          value={formik.values.unitSize}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
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
        {Boolean(formik.errors.unitSize) && formik.touched.unitSize && (
          <FormErrorMessage>{formik.errors.unitSize}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl as="fieldset">
        <FormLabel
          pt={4}
          htmlFor="unitType"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Storage Type
        </FormLabel>
        <RadioGroup
          colorScheme="green"
          value={formik.values.unitType}
          onChange={(e) => formik.setFieldValue("unitType", e)}
          name="unitType"
        >
          <HStack spacing="24px">
            <Radio value="Indoor">Indoor</Radio>
            <Radio value="Outdoor">Outdoor</Radio>
            <Radio value="Drive Up">Drive up</Radio>
            <Radio value="Self Storage">Self Storage</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <FormControl as="fieldset">
        <FormLabel
          pt={4}
          htmlFor="unitType"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Unit Detail
        </FormLabel>
        <CheckboxGroup
          colorScheme="green"
          value={formik.values.unitDetail}
          onChange={(e) => formik.setFieldValue("unitDetail", e)}
        >
          <Stack spacing={[2, 4]} direction={["column", "row"]}>
            <Checkbox value="24hr">24hr</Checkbox>
            <Checkbox value="cc">Climate</Checkbox>
            <Checkbox value="ag">Above Ground</Checkbox>
            <Checkbox value="elavator">Elevators</Checkbox>
            <Checkbox value="electricity">Power</Checkbox>
          </Stack>
        </CheckboxGroup>
      </FormControl>

      <FormControl
        isRequired
        as="fieldset"
        isInvalid={
          Boolean(formik.errors.ratePreference) && formik.touched.ratePreference
        }
      >
        <FormLabel
          pt={4}
          htmlFor="unitType"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Rate Preference
        </FormLabel>
        <RadioGroup
          colorScheme="green"
          value={formik.values.ratePreference}
          onChange={(e) => {
            formik.setFieldValue("ratePreference", e)
          }}
          name="ratePreference"
          onBlur={formik.handleBlur}
        >
          <HStack spacing="24px">
            <Radio value="Flat">Flat Fee</Radio>
            <Radio value="Hourly">Hourly</Radio>
          </HStack>
        </RadioGroup>
        {Boolean(formik.errors.ratePreference) &&
          formik.touched.ratePreference && (
            <FormErrorMessage>{formik.errors.ratePreference}</FormErrorMessage>
          )}
      </FormControl>

      <FormControl
        isRequired
        as="fieldset"
        isInvalid={
          Boolean(formik.errors.serviceInterestedIn) &&
          formik.touched.serviceInterestedIn
        }
      >
        <FormLabel
          pt={4}
          htmlFor="unitType"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Service Interested In
        </FormLabel>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={["24hr", "cc"]}
          value={formik.values.serviceInterestedIn}
          onChange={(e) => formik.setFieldValue("serviceInterestedIn", e)}
        >
          <Stack spacing={[2, 4]} direction={["column"]}>
            <Checkbox value="clean">Clean Out</Checkbox>
            <Checkbox value="organize">Organization</Checkbox>
            <Checkbox value="relocate">Relocation</Checkbox>
            <Checkbox value="inventory">Iventory Management</Checkbox>
            <Checkbox value="recycle">Recycling and Disposal</Checkbox>
            <Checkbox value="consign">Consigment</Checkbox>
            <Checkbox value="document">Document Store</Checkbox>
            <Checkbox value="heavy">Heavy Item Removal</Checkbox>
            <Checkbox value="pickup">Pickup and Store</Checkbox>
            <Checkbox value="keymngt">Key management</Checkbox>
            <Checkbox value="locksmith">Locksmith</Checkbox>
            <Checkbox value="pest">Pest Control</Checkbox>
          </Stack>
        </CheckboxGroup>
        {Boolean(formik.errors.serviceInterestedIn) &&
          formik.touched.serviceInterestedIn && (
            <FormErrorMessage>
              {formik.errors.serviceInterestedIn}
            </FormErrorMessage>
          )}
      </FormControl>
    </>
  )
}

type FileUploadProps = {
  formik: FormikProps<FormInitialValues>
  accept?: string
  multiple?: boolean
  children?: React.ReactNode
}

const FileUpload = (props: FileUploadProps) => {
  const { formik, accept, multiple, children } = props
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => inputRef.current?.click()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filesArray = Array.from(event.currentTarget.files!)
    if (filesArray?.length) {
      formik.setFieldValue("images", filesArray)
      event.target.value = "" // reset input value
    }
  }

  return (
    <InputGroup onClick={handleClick}>
      <input
        type={"file"}
        multiple={multiple || false}
        hidden
        accept={accept}
        ref={inputRef}
        name="images"
        onChange={handleFileChange}
      />
      <>{children}</>
    </InputGroup>
  )
}

const Form3 = ({ formik }: { formik: FormikProps<FormInitialValues> }) => {
  const imageRemover = (file: File) => {
    const updatedImages = formik.values.images.filter(
      (el) => el.name !== file.name
    )

    formik.setFieldValue("images", updatedImages)
  }

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Additional Information
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl
          isRequired
          as="fieldset"
          isInvalid={
            Boolean(formik.errors.rushService) && formik.touched.rushService
          }
        >
          <FormLabel
            pt={4}
            htmlFor="unitType"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Rush Service?
          </FormLabel>
          <RadioGroup
            colorScheme="green"
            defaultValue="no"
            value={formik.values.rushService}
            onChange={(e) => formik.setFieldValue("rushService", e)}
            name="rushService"
            onBlur={formik.handleBlur}
          >
            <HStack spacing="24px">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </HStack>
          </RadioGroup>
          {Boolean(formik.errors.rushService) && formik.touched.rushService && (
            <FormErrorMessage>{formik.errors.rushService}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isRequired
          as="fieldset"
          isInvalid={
            Boolean(formik.errors.projectDeadline) &&
            formik.touched.projectDeadline
          }
        >
          <FormLabel
            pt={4}
            htmlFor="unitType"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Project has deadline?
          </FormLabel>
          <RadioGroup
            colorScheme="green"
            defaultValue="no"
            value={formik.values.projectDeadline}
            onChange={(e) => formik.setFieldValue("projectDeadline", e)}
            name="projectDeadline"
            onBlur={formik.handleBlur}
          >
            <HStack spacing="24px">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </HStack>
          </RadioGroup>
          {Boolean(formik.errors.projectDeadline) &&
            formik.touched.projectDeadline && (
              <FormErrorMessage>
                {formik.errors.projectDeadline}
              </FormErrorMessage>
            )}
        </FormControl>

        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Prefer date of service
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="date"
              focusBorderColor="brand.400"
              rounded="md"
              value={formik.values.dateOfService}
              onChange={formik.handleChange}
              name="dateOfService"
              onBlur={formik.handleBlur}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="additional" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Additional details
          </FormLabel>
          <Textarea
            placeholder="Anything else?"
            rows={6}
            size={"lg"}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
            value={formik.values.additionalDetail}
            onChange={formik.handleChange}
            name="additionalDetail"
            onBlur={formik.handleBlur}
          />
          <FormHelperText>Brief Additional Details if needed.</FormHelperText>
        </FormControl>
        <FormControl
          id="additional"
          as={GridItem}
          mt={4}
          colSpan={[3, 2]}
          isInvalid={Boolean(formik.errors.images)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
            }}
          >
            <Stack direction="row" flexWrap="wrap" gap={3}>
              {formik.values.images &&
                formik.values.images.map((file) => {
                  const imageSrc = URL.createObjectURL(file)

                  return (
                    <Box key={file.name} position="relative">
                      <CloseButton
                        size="sm"
                        color="white"
                        position="absolute"
                        right={1}
                        onClick={() => imageRemover(file)}
                      />
                      <Image
                        src={imageSrc}
                        alt={file.name}
                        boxSize="70px"
                        objectFit="cover"
                        borderRadius="md"
                      />
                    </Box>
                  )
                })}
            </Stack>
            <FileUpload formik={formik} multiple accept="image/*">
              <Button>Upload</Button>
            </FileUpload>
          </Box>
          <FormHelperText>Upload Image.</FormHelperText>

          {Boolean(formik.errors.images) && formik.touched.images && (
            <FormErrorMessage>{formik.errors.images as any}</FormErrorMessage>
          )}
        </FormControl>
      </SimpleGrid>
    </>
  )
}

export default function Quote() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required*"),
    lastName: Yup.string().required("Last name is required*"),
    email: Yup.string()
      .required("Email name is required*")
      .email("Email is not valid*"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .required("Phone number is required"),
    region: Yup.string().optional(),
    streetAddress: Yup.string().required("Unit address is required*"),
    city: Yup.string().required("City is required*"),
    state: Yup.string().optional(),
    zip: Yup.string().required("Zip/Postal is required*"),

    unitSize: Yup.string().required("Storage size is required*"),
    unitType: Yup.string().optional(),
    unitDetail: Yup.array().of(Yup.string()).optional(),
    ratePreference: Yup.string().required("Rate Preference is required*"),
    serviceInterestedIn: Yup.array()
      .min(1, "At least one service is required")
      .required("At least one service is required"),

    rushService: Yup.string().required("Rush service is required*"),
    projectDeadline: Yup.string().required("Project deadline is required*"),
    dateOfService: Yup.string().optional(),
    additionalDetail: Yup.string().optional(),
    images: Yup.array()
      .max(4, "Maximum 4 files allowed")
      .of(
        Yup.mixed().test(
          "fileSize",
          "File size is too large",
          function (value) {
            if (value) {
              const file = value as File // Cast value to File type
              const fileSize = file.size // File size in bytes
              const maxSizeInBytes = 1 * 1024 * 1024 // 1MB in bytes

              return fileSize <= maxSizeInBytes
            }

            return true // Skip validation if no file is provided
          }
        )
      ),
  })

  const putStorageItem = async (item: File) => {
    const imageRef = ref(storage, `images/${item.name + v4()}`)
    await uploadBytes(imageRef, item)

    const url = await getDownloadURL(imageRef)

    return url
  }

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const imageUploadUrls = await Promise.all(
        values.images.map(async (image) => await putStorageItem(image))
      )

      const docRef = collection(db, "quotes")
      await addDoc(docRef, {
        ...values,
        images: imageUploadUrls,
      })

      setStep(1)
      setProgress(33.33)
      resetForm()

      toast({
        title: "Quote Submitted.",
        description: "A UnitMaid Pro will contact you soon.",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    },
  })

  const handleNext = () => {
    const isFirstStepValid =
      formik.values.firstName &&
      formik.values.lastName &&
      formik.values.email &&
      formik.values.phoneNumber &&
      formik.values.streetAddress &&
      formik.values.city &&
      formik.values.zip &&
      formik.errors.firstName === undefined &&
      formik.errors.lastName === undefined &&
      formik.errors.email === undefined &&
      formik.errors.phoneNumber === undefined &&
      formik.errors.city === undefined &&
      formik.errors.zip === undefined &&
      formik.errors.streetAddress === undefined

    const isSecondStepValid =
      formik.values.unitSize &&
      formik.values.ratePreference.length > 0 &&
      formik.values.serviceInterestedIn.length > 0 &&
      formik.errors.unitSize === undefined &&
      formik.errors.ratePreference === undefined &&
      formik.errors.serviceInterestedIn === undefined

    if (step === 1 && !isFirstStepValid) {
      formik.setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
        city: true,
        zip: true,
        streetAddress: true,
      })
      return
    }

    if (step === 2 && !isSecondStepValid) {
      formik.setTouched({
        unitSize: true,
        ratePreference: true,
        serviceInterestedIn: true,
      })
      return
    }

    setStep(step + 1)

    if (step === 3) {
      setProgress(100)
    } else {
      setProgress(progress + 33.33)
    }
  }

  const handleSubmit = () => {
    const isThirdStepValid =
      formik.values.rushService &&
      formik.values.projectDeadline &&
      formik.errors.rushService === undefined &&
      formik.errors.projectDeadline === undefined

    if (!isThirdStepValid) {
      formik.setTouched({
        rushService: true,
        projectDeadline: true,
      })
      return
    }
    formik.handleSubmit()
  }

  return (
    <>
      <Divider marginBottom={9} />
      <VStack spacing={2} textAlign="center" marginBottom={6}>
        <Heading
          as="h1"
          fontSize="2xl"
          color={"black"}
          textDecoration={"underline"}
        >
          UnitMaid Service Inquiry Form
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          The experts in clean out, organization, and all things storage.
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
        as="form"
      >
        <Progress
          colorScheme="green"
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1 formik={formik} />
        ) : step === 2 ? (
          <Form2 formik={formik} />
        ) : (
          <Form3 formik={formik} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="green"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={handleNext}
                colorScheme="green"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="green"
                variant="solid"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}
