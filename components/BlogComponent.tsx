import React from "react";
import { Box, Flex, Text, Image ,Button} from "@chakra-ui/react";


interface BlogProps {
  title: string;
  content: string;
  image: string;
  slug: string;
  tags: string[];
}

const BlogComponent: React.FC<BlogProps> = ({ title, content, image, slug,tags }) => {
  return (
    <Flex direction={{ base: "column", md: "column" }} m={4}  boxShadow="lg" height={{ base: "auto", md:"auto" }} width={{ base: "auto", md: "400px" }}>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={0}>
          <Image src={image} alt={title} h="250px" w='100%'/>
      </Box>
      <Box flex={1} p={3} alignItems='center' display='flex' flexDirection='column' justifyContent='space-between' >
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {title}
        </Text>
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Tags: {tags?tags:"N/A"}
        </Text>
        <Text>{content}</Text>
        <Text color="blue.500" mt={2}> {slug} </Text>
        <Button colorScheme="blue" variant="outline" mt={2}
          onClick={() => { window.location.href = `/blogs/${slug}`}}>
          Read More
        </Button>
      </Box>
    </Flex>
  );
};

export default BlogComponent;
