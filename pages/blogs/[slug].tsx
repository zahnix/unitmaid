"use client"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { GetStaticProps, GetStaticPaths } from "next";
import { sanityClient } from "../../app/sanityclient/client";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";


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
          <Flex
            direction="column"
            paddingBlock={{ base: "40px", md: "100px" }}
            backgroundColor="#75c236"
            height={{ base: "400px", md: "500px" }}
            w="100%"
            padding="20%"
            textAlign="center"
          >
            <Text
              fontWeight="medium"
              mb={2}
              color="white"
              fontSize={{ base: "26px", md: "40px" }}
            >
              {blogData.title}
            </Text>

            <Text fontSize="sm" fontWeight="bold" mb={2} color="white">
              {blogData.tags
                ? blogData.tags.map((tag: string) => (
                    <Text as="span" key={tag} color="white">
                      {tag} {" "}
                    </Text>
                  ))
                : "N/A"}
            </Text>
          </Flex>
          <Box
            width={{ base: "100%", md: "70%" }}
            height={{ base: "400px", md: "550px" }}
          >
            <Image
              src={blogData.image.asset.url}
              alt={blogData.title}
              position="absolute"
              top={{base:"11%" ,md:"20%"}}
              width={{ base: "90%", md: "70%" }}
              height={{ base: "400px", md: "650px" }}
              left={{ base: "5%", md: "15%" }}
            />
          </Box>
          <Box
            flex={1}
            width={{ base: "100%", md: "70%" }}
            alignSelf={{ base: "center", md: "center" }}
            p={3}
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            
          >
            <Text>{blogData.content
                ? blogData.content.map((content: any) => (
                    <Text as="span" key={content._key} color="black">
                      {content.children[0].text}
                      <br />
                    </Text>
                  ))
                : "N/A"}
            </Text>

            <Text color="blue.500" mt={2}>
              {" "}
              {slug}{" "}
            </Text>
          </Box>
        </Flex>
      </div>
    </ChakraProvider>
  );
}
