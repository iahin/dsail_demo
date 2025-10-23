import {
	Heading,
	Box,
	Flex,
	Text,
	Spacer,
	Grid,
	Center,
	Square,
	Image,
	Badge,
	Link,
	LinkBox,
	LinkOverlay,
	useColorModeValue,
} from '@chakra-ui/react';
import format from 'date-fns/format'
import { useRouter } from 'next/dist/client/router';
const ProjectItem = ({item}) => {
	const { id,name, summary, profilePicture, createdAt } = item;
	const bg = useColorModeValue('white.600', 'portage');
	const colorLink = useColorModeValue('dark.400', 'portage');
	const color = useColorModeValue('dark.400', 'dark.200');
	const router = useRouter();
	return (
		<LinkBox
		boxShadow="0 0 6px 0 #8c8cf4"
		transition="all 0.4s"
		my={2}
		mx={{ base: '4', xl: '0' }}
		border="solid 1px #8c8cf4"
		onClick={()=>router.push(`projects/${id}`)}
		_hover={{
				boxShadow: '1px 1px 12px #8c8cf4',
				border: 'solid 1px #8c8cf4',
				color: { bg },
		}}
		ml={0}
		mr={0}
		borderRadius="0.5rem"
		>

			<Box>
					<Center>
							<Image
									borderRadius="0.5em"
									src={profilePicture}
									w={{ base: '100%' }}
									h="220px"
									objectFit="cover"
							/>
					</Center>
			</Box>
			<Box 
			pt={8}
			ml="10px" mr="10px">
				<Link
						fontWeight="bold"
						_hover={{ opacity: '0.5' }}
						color={colorLink}
				>
					<Text
						textAlign="center"
						fontSize={{
								base: '1.5rem',
								xl: '1.5rem',
								'4K': '2em',
						}}
					>
						{name}
					</Text>
				</Link>
				<Text
						mt={2}
						pr={4}
						mb={10}
						textAlign="center"
						lineHeight={{ '4K': '1.2' }}
						color={color}
						noOfLines={4}
						overflow="hidden"
						text-overflow="ellipsis"
						fontSize={{
								base: '1rem',
								xl: '1rem',
								'4K': '1.7rem',
						}}
				>
					{summary}
				</Text>
			</Box>
		</LinkBox>
	)
}

export default ProjectItem 