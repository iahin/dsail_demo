import { Box, Container, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import ProjectsList from "../components/projects/ProjectsList";
import { HeaderTitle, Para } from "../components/shared/Text";

export default function Projects() {
  const bg = useColorModeValue('white.400', 'portage');
	const paraColor = useColorModeValue('white.400', 'jordyblue');
  return (
    <Box pt="80px" pb="50px">
      <Box style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
			}}>
        <Container 
        pr="30px"
        textAlign="left" maxW="container.lg">
          <HeaderTitle label="Sample Projects"/>
          <SimpleGrid mt="15px" mr="30px" ml="30px" md={4}>
            <ProjectsList/>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}