import { Box, Divider, Icon, Image, Link, Text } from "@chakra-ui/react"
import { IoLogoLinkedin, IoIosGlobe } from "react-icons/io"
import { Para } from "../shared/Text"

export default function PeopleItem({people}) {
	const { summary, name, title, sitProfile, profilePicture, linkedInProfile} = people
	return (
		<Box pb="10px" borderColor="#ccc" borderWidth="1px">
			<Image 
				alt=""
				ml="-1px"
				mr="-1px"
				width="100%"
				src={profilePicture}>
			</Image>
			<Text
				color="portage"
				fontWeight="600"
				mt="10px"
				ml="10px"
				fontSize={{
						base: '1.2rem',
				}}
			>
				{name}
			</Text>
			<Text
				color="dark.200"
				fontSize="1rem"
				ml="10px"
			>
				{title}
			</Text>
			<Text 
				mt="10px"
				ml="10px"
				mr="10px"
				color="dark.200"
				fontSize="0.9rem">
				{summary}
			</Text>
			<Box height="30px">
				<Box mt="5px" ml="8px" d="flex" alignItems="flex-start">
					{linkedInProfile && (
						<Link href={linkedInProfile} isExternal>
							<Icon
							color="#0e76a8" fontSize="1.3rem" as={IoLogoLinkedin}/>
						</Link>
					)}
					{sitProfile && (
						<Link href={sitProfile} isExternal>
							<Icon 
							color="#0e76a8" 
							fontSize="1.3rem" 
							as={IoIosGlobe}/>
						</Link>
					)}
				</Box>
			</Box>
		</Box>
	)
}