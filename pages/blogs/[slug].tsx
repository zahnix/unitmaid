"use client"
import NextLink from 'next/link'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Button, Badge, Stack, Link, Heading, List, ListItem } from "@chakra-ui/react";
import { GetStaticProps, GetStaticPaths } from "next";
import { sanityClient } from "../../app/sanityclient/client";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import PortableText from "react-portable-text";


export default function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [blogData, setBlogData] = useState<any>(null); 

  useEffect(() => {
    if (slug) {
        const getBlogData = async () => {
            const fetchedBlogData: any = await sanityClient.fetch(
                `*[_type == "blog" && slug.current == $slug]{
                    title,
                    content,
                    image{asset->{url}},
                    tags
                }`,
                { slug }
            );
            setBlogData(fetchedBlogData[0]);
            console.log(fetchedBlogData[0]);
        };
    
        getBlogData();
    }
  }, [slug]);

  // Render loading state or any other UI while data is being fetched
  if (!blogData) {
    return <div>Loading...</div>;
  }

  // Render the blog data
  return (
    <ChakraProvider>
      <Navbar />
      <div>
        <Flex direction="column" align="center">
          <Flex pt={6} pb={1}>
          <Box
            w={'full'}
            height={{ base: "400px", md: "500px" }}

          >
            <Image
              src={blogData.image.asset.url}
              alt={blogData.title}
              
              objectFit={"cover"}
              
              width={{ base: "600", md: "800", sm: "500" }}
              height={{ base: "400px", md: "500px" }}
              
            />
          </Box>
          </Flex>
          <Flex
            direction="column"
            paddingBlock={{ base: "30px", md: "50px" }}
            backgroundColor="#0F8D47"
            height={{ base: "200px", md: "300px" }}
            w="100%"
            padding="10%"
            textAlign="center"
          >
            <Text
              fontWeight="bold"
              mb={2}
              color="white"
              fontSize={{ base: "24px", md: "40px" }}
            >
              {blogData.title}
            </Text>

            <Text fontSize="md" fontWeight="medium" mb={2} color="green">
              {blogData.tags
                ? blogData.tags.map((tag: string) => (
                    <Badge as="span" key={tag} color="green" m={2}>
                      {tag} {" "}
                    </Badge>
                  ))
                : "N/A"}
            </Text>
          </Flex>
          <Box
            flex={1}
            width={{ base: "100%", md: "70%" }}
            alignSelf={{ base: "center", md: "center" }}
            mt={4}
            p={3}
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            
          >
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={blogData.content}
              serializers={{
                h1:(props: any) => (
                  <Heading textAlign={"center"} as='h1' size='4xl' noOfLines={1} mb={32} mt={32}
                  {...props}
                  />
                ),
                h2:(props: any) => (
                  <Heading textAlign={"center"} as='h2' size='3xl' noOfLines={1} mb={12} mt={16}
                  {...props}
                  />
                ),
                h3:(props: any) => (
                  <Heading textAlign={"center"} as='h3' size='2xl' mb={6} mt={10}
                  {...props}
                  />
                ),
                h4:(props: any) => (
                  <Heading textAlign={"center"} as='h4' size='xl' mb={6} mt={10}
                  {...props}
                  />
                ),
                
                li:({children}: any) => (
                  <List spacing={3}><ListItem>{children}</ListItem></List>
                ),
                link:({href, children}: any) => (
                  <a href={href} color="orange" >{children}</a>
                ),
                underline:({children}: any) => (
                  <li color="brown">{children}</li>
                ),
                strong:({children}: any) => (
                  <Text as="b" color="green-500">{children}</Text>
                ),
                em:({children}: any) => (
                  <Text as='mark' backgroundColor='#48BB78'>{children}</Text>
 
                ),
              }}
            />
          </Box>
          <Stack alignItems={"center"} direction={{ base: 'column', md: 'row' }} spacing={4} m={6}>
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
          </Stack>
        </Flex>
      </div>
      <Footer/>
    </ChakraProvider>
  );
}
