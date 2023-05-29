import React from "react";
import { Box, Flex, Text, Image ,Button} from "@chakra-ui/react";
import Link from "next/link";

interface BlogProps {
  title: string;
  content: string;
  image: string;
  slug: string;
  tags: string[];
}

const BlogComponent: React.FC<BlogProps> = ({ title, content, image, slug,tags }) => {
  return (
    <Flex
      direction="column"
      m={4}
      boxShadow="lg"
      height={{ base: "550px", md: "500px" }}
      width={{ base: "auto", md: "400px" }}
      align="center"
    >
      <Box borderWidth="1px" h="250px" w='100%'>
        <Image src={image} alt={title} height="100%" width="100%" />
      </Box>
      <Box
        p={3}
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        overflow="hidden"
      >
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {title}
        </Text>
        <Text fontSize="sm" fontWeight="light" mb={2} color="blue.500">
          Tags: {tags ?
            tags.map((tag) => (
              <Text as="span" key={tag} color="blue.500"  >
                {tag} {" "}
              </Text>
            ))
           : "N/A"}
        </Text>
        <Text>{content}</Text>
        <Text color="blue.500" mt={2}>
          {" "}
          {slug}{" "}
        </Text>
      </Box>
      <Link href={`/blogs/${slug}`}>
        <Button
          colorScheme="blue"
          variant="outline"
          mt={2}
          _hover={{ bg: "blue.500", color: "white" }}
          marginBlock="10px"
        >
          Read More
        </Button>
      </Link>
    </Flex>
  );
};

export default BlogComponent;
