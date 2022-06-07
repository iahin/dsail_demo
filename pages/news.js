import { Box, Container, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import NewsList from "../components/news/NewsList";
import { HeaderTitle, Para } from "../components/shared/Text";

export default function News() {
  return (
    <Box pt="80px" pb="50px">
			<Container 
			pr="30px"
			textAlign="left" maxW="container.lg">
        <HeaderTitle label="All News"/>
        <SimpleGrid mt="15px" mr="30px" ml="30px" md={4}>
          <NewsList/>
        </SimpleGrid>
      </Container>
		</Box>
	)
}
