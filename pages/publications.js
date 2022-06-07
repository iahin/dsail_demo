import { Box, Container, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import PublicationsList from "../components/publications/PublicationsList";
import { HeaderTitle, Para } from "../components/shared/Text";

export default function Publications() {
  return (
		<Box pt="80px" pb="50px">
			<Container 
			pr="30px"
			textAlign="left" maxW="container.lg">
				<HeaderTitle label="Selected Publications"/>
				<SimpleGrid mt="15px" mr="30px" ml="30px" md={4}>
					<PublicationsList/>
				</SimpleGrid>
			</Container>
		</Box>
	)
}