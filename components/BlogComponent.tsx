import React from "react";
import { Box, Flex, Text, Image ,Button, Badge} from "@chakra-ui/react";
import Link from "next/link";

interface BlogProps {
  title: string;
  content: string;
  image: string;
  slug: string;
  tags: string[];
}

const BlogComponent: React.FC<BlogProps> = ({ title, image, slug,tags }) => {
  return (
    <Flex
      direction="column"
      m={4}
      boxShadow="lg"
      height={{ base: "400px", md: "400px" }}
      width={{ base: "400px", md: "400px"}}
      align="center"
    >
      <Box borderWidth="1px" h="250px" w='350px'>
        <Image 
          objectFit={"cover"}
          boxSize={"md"}
          src={image} 
          alt={title} 
          height="100%" 
          width="100%" />
      </Box>
      <Box
        p={1}
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        overflow="hidden"
      >
        <Text textAlign={"center"} fontSize="xl" fontWeight="bold" mb={1}>
          {title}
        </Text>
        <Text fontSize="sm" fontWeight="light" mb={1} color="green.500">
          {tags ?
            tags.map((tag) => (
              <Badge as="span" key={tag} colorScheme="green" m={2}>
                      {tag} {" "}
              </Badge>
            ))
           : "N/A"}
        </Text>
        
      </Box>
      <Link href={`/blogs/${slug}`}>
        <Button
          colorScheme="green"
          variant="outline"
          mt={2}
          _hover={{ bg: "green.500", color: "white" }}
          marginBlock="10px"
        >
          Read More
        </Button>
      </Link>
    </Flex>
  );
};

export default BlogComponent;
