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
	Icon,
} from '@chakra-ui/react';
import { IoIosGlobe } from 'react-icons/io'
import { MdPictureAsPdf } from 'react-icons/md'
const PublicationItem = ({publication}) => {
	const {
		publicationSubheader,
		publicationTitle,
		publicationUrl,
		publicationPdfLink,
	} = publication;
	const hasLink = publicationUrl || publicationPdfLink;
	const bg = useColorModeValue('white.600', 'portage');
	const colorLink = useColorModeValue('dark.400', 'portage');
	const color = useColorModeValue('dark.400', 'dark.200');
	return (
		<LinkBox
		boxShadow="0 0 6px 0 #8c8cf4"
		transition="all 0.4s"
		my={2}
		mx={{ base: '4', xl: '0' }}
		border="solid 1px #8c8cf4"
		_hover={{
				boxShadow: '1px 1px 12px #8c8cf4',
				border: 'solid 1px #8c8cf4',
				color: { bg },
		}}
		ml={0}
		mr={0}
		borderRadius="0.5rem"
		>
			<Flex
					color="white"
					p={4}
					display={{ lg: 'flex' }}
					className="box-lighting-alt"
					align="left"
					flexFlow="row nowrap"
					borderColor={bg}
					borderWidth="1px"
					key={1}
					borderRadius="0.5rem"
			>
					<Box flex="5" pl={{ sm: 0, lg: '0' }} mt={{ base: '4', lg: 0 }}>
							<Text
								color={bg}
								fontWeight="bold"
								fontSize={{
											base: '1.1rem',
											xl: '1.3rem',
											'4K': '2em',
									}}
							>
								{publicationTitle}
							</Text>
							<Text
									mt={2}
									pr={4}
									textAlign="justify"
									lineHeight={{ '4K': '1.2' }}
									color={color}
									noOfLines={4}
									overflow="hidden"
									text-overflow="ellipsis"
									fontSize={{
											base: '1.1rem',
											xl: '1.1rem',
											'4K': '1.7rem',
									}}
							>
								{publicationSubheader}
							</Text>
					</Box>
					{hasLink && (
					<Flex alignItems="center">
						<Box ml="10px">
							{publicationPdfLink && (
								<Link href={publicationPdfLink} isExternal>
									<Icon 
									cursor="pointer"
									fontSize="25px"
									color="#373ffc"
									mr="5px"
									color="#333232" 
									as={MdPictureAsPdf}/>
								</Link>
							)}
							{publicationUrl && (
								<Link href={publicationUrl} isExternal>
									<Icon 
									cursor="pointer"
									fontSize="25px"
									color="#333232"
									as={IoIosGlobe}/>
								</Link>
							)}
						</Box>
					</Flex>
					)}
			</Flex>
		</LinkBox>
	)
}

export default PublicationItem 