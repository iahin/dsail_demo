import { Box, Container, Flex, Image, SimpleGrid, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import { useMotionTemplate } from "framer-motion";
import NewsList from "../components/news/NewsList";
import { HeaderTitle, Para } from "../components/shared/Text";
import PeopleItem from "../components/team/PeopleItem";
import useTeam from "../hooks/useTeam";

export default function People() {
	const { peoples }  = useTeam()
  return (
		<Box pt="80px" pb="50px" style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
			}}>
			<Box background="#071E22">
				<Box boxShadow="xl" m="50px" background="#F6F7EB">
					<HeaderTitle 
						hideBorder
						color="portage"
						style={{
							width:"530px",
							paddingTop: '10px', 
							paddingBottom: '10px',
							lineHeight: '40px',
							marginBottom: '5px',
						}}
						label="Message from the Director">
					</HeaderTitle>
					<Para style={{marginTop: '10px'}}>
						“Welcome to SIT Data Science and AI lab! The DSAIL group is highly interested in Big Data, Data Science and AI research, and intrigued to investigate next generation of AI technologies and innovations. We work closely and extensively with our collaborators from academia and industry. We welcome collaborations! 
						<br/>
						<br/>
						In addition, we are also looking full-time or part-time research fellows, research engineers or student interns in the team, and also offering Industrial Phd and Masters positions. If you are a highly motivated and creative person looking for a position or pursuing a Phd or Master degree,  you may want to contact us to explore the opportunities! ”
						<br/>
						<br/>
						<span style={{fontWeight: 600, fontStyle: 'italic'}}>
						“Forgetting what is behind and straining toward what is ahead , I press on to the goal to win the price!”
						</span>
						<br/>
						<br/>
						<div style={{
							textAlign: 'right'
						}}>
							<span style={{textAlign: 'right', fontStyle: 'italic', fontWeight: 600}}>
							----Daniel, Wang Zhengkui
							</span>
						</div>
					</Para>
				</Box>
			</Box>
			<Container 
				pr="30px"
				textAlign="left" maxW="container.lg">
				<HeaderTitle label="Faculty"/>
				<Para>DSAIL is guided by a team of faculties from SIT. </Para>
				<SimpleGrid 
				width="900px" mt="15px" mr="30px" ml="30px"
				minChildWidth="250px" spacing="15px">
					{peoples.filter(people=>people.memberType==='Faculty').map(people => (
						<PeopleItem people={people}/>
					))}
				</SimpleGrid>
			</Container>
			<Container 
				pr="30px"
				textAlign="left" maxW="container.lg">
				<HeaderTitle label="PhD Students"/>
				<SimpleGrid 
				width="900px" mt="15px" mr="30px" ml="30px"
				columns={3}
				spacing="15px">
					{peoples.filter(people=>people.memberType==='PhD').map(people => (
						<PeopleItem people={people}/>
					))}
				</SimpleGrid>
				<HeaderTitle label="Research Fellow / Engineer"/>
				<SimpleGrid 
				width="900px" mt="15px" mr="30px" ml="30px"
				columns={3}
				spacing="15px">
					{peoples.filter(people=>people.memberType==='Research Fellow / Engineer').map(people => (
						<PeopleItem people={people}/>
					))}
				</SimpleGrid>
				<HeaderTitle label="Student Intern"/>
				<SimpleGrid 
				width="900px" mt="15px" mr="30px" ml="30px"
				columns={3}
				spacing="15px">
					{peoples.filter(people=>people.memberType==='Student Intern').map(people => (
						<PeopleItem people={people}/>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	)
}