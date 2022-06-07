import { Box, Container } from "@chakra-ui/react";
import { HeaderTitle, Para } from "../components/shared/Text";
export default function Contact() {
	return (
		<Box pt="80px" pb="50px">
			<Container 
			pr="30px"
			textAlign="left" maxW="container.lg">
				<HeaderTitle label="Contact Us"/>
				<Para>
					If you have any questions or looking to collaborate with DSAIL lab, please contact Dr. Daniel Wang Zhengkui at zhengkui.wang@singaporetech.edu.sg.
				</Para>
				<HeaderTitle label="Our Location"/>
				<Para>
					We are currently located at Singapore Institute of Technology at Nanyang Polytechnic.
					SIT@NYP SR-5E (Located at Level 5 of the building), 172 Ang Mo Kio Ave 8, Singapore 567739
				</Para>
				<Box mt="15px" ml="30px">
					<iframe 
					style={{
						width: '600px',
						height: '450px',
						border: 0,
					}}
					src="https://maps.google.com/maps?q=SIT%20@%20NYP&t=&z=13&ie=UTF8&iwloc=&output=embed"/> 
				</Box>
			</Container>
		</Box>
	)
}