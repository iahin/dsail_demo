import { Box, Container, Image, ListItem, OrderedList, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { HeaderTitle, Para } from "../../components/shared/Text";
import useSingleNews from "../../hooks/useSingleNews";
import useSingleProject from "../../hooks/useSingleProject";

export default function SingleNewsPage() {
  const bg = useColorModeValue('white.400', 'portage');
	const paraColor = useColorModeValue('white.400', 'dark.200');
	const peoples = ['Daniel Wang Zhengkui', 'Malcolm Low', 'Yijing Wong', 'Tan Yong Kuang Gavin']
	const router = useRouter()
	console.log('Router: ', router)
	const id = router.query.pid
	const { singleNews } = useSingleNews(id)
	if(singleNews === null) {
		return null;
	}
	const { description, image, title } = singleNews;
  return (
    <Box pt="80px" pb="50px">
			<Container 
			pr="30px"
			textAlign="left" maxW="container.lg">
				<HeaderTitle label={title}/>
				<Image ml="30px" maxWidth="500px" src={image}/>
				<Box mb="15px" mt="15px">
					{Array.isArray(description) && description.map(({data, marks, type, value}) => {
							if(type === 'parsed') {
								return (
									<Box mb="15px" mt="15px">
										<Para style={style}>
											{data}
										</Para>
									</Box>
								)
							}
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
											__html: data || value,
										}}/>
									</Para>
								</Box>
							)
							return html
					})}
					{!Array.isArray(description) && (
						<Para>
							<div dangerouslySetInnerHTML={{
								__html: description,
							}}/>
						</Para>
					)}
				</Box>
			</Container>
		</Box>
	)
}