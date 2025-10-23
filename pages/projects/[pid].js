import { Image, Box, ListItem, OrderedList, SimpleGrid, Text, useColorModeValue, Container } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { HeaderTitle, Para } from "../../components/shared/Text";
import useSingleProject from "../../hooks/useSingleProject";

export default function SingleProjectPage() {
  const bg = useColorModeValue('white.400', 'portage');
	const paraColor = useColorModeValue('white.400', 'dark.200');
	const peoples = ['Daniel Wang Zhengkui', 'Malcolm Low', 'Yijing Wong', 'Tan Yong Kuang Gavin']
	const router = useRouter()
	console.log('Router: ', router)
	const id = router.query.pid
	console.log('Id: ', id)
	const { singleProject } = useSingleProject(id);
	if(singleProject === null) {
		return null;
	}
	const { projectOutput, acknowledgement, name, brief, members } = singleProject;
  return (
		<>
		<Box
		pt="80px">
			<Container 
			pr="30px"
			textAlign="left" maxW="container.lg">
				<HeaderTitle label={name}/>
				{brief.map(({data, marks, type, value}) => {
					if(type === 'html') {
						return (
							<Box mb="15px" mt="15px">
								{data}
							</Box>
						)
					}
					if(type === 'assets') {
						return (
							<Box ml="30px" mb="15px" mt="15px">
								<Image maxWidth="500px" src={value}/>
							</Box>
						)
					}
					let style = {};
					if(marks && (marks || []).find(x=>x.type === 'bold')) {
						style = {
							...style,
							fontWeight: 600,
						}
					}
					const html= (
						<Box mb="15px" mt="15px">
							<Para style={style}>
								<div dangerouslySetInnerHTML={{
									__html: value,
								}}/>
							</Para>
						</Box>
					)
					return html
				})}
			</Container>
		</Box>
		<Box 
		backgroundColor="portage"
		mt="40px"
		pt="50px" pb="80px">
			<Container 
			pr="30px"
			textAlign="left" maxW="container.lg">
				<HeaderTitle color="#fff" label="Project Members"/>
				<OrderedList ml="30px">
					{members.map(member => (
						<ListItem 
						ml="18px" fontFamily="Open Sans" color="#fff" 
						fontSize="1.2rem"
						fontWeight="400">{member}</ListItem>
					))}
				</OrderedList>
			</Container>
		</Box>
    <Box pt="40px" pb="80px">
			<Container 
			pr="30px"
			textAlign="left" maxW="container.lg">
				<HeaderTitle label="Project Output"/>
				<Para>
					<div dangerouslySetInnerHTML={{
						__html: projectOutput.replace(/\n/g, '<br/>'),
					}}/>
				</Para>
			</Container>
		</Box>
		<Box 
		backgroundColor="#ececec"
		pt="20px" pb="40px">
			<Container 
			pb="20px"
			pr="30px"
			textAlign="left" maxW="container.lg">
				<HeaderTitle label="Acknowledgements"/>
				<Para>
					{acknowledgement}
				</Para>
			</Container>
		</Box>
		</>
	)
}