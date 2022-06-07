import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { Para } from "./shared/Text";

const whatWeDoList = [{
	label: 'Machine Learning & Deep Learning',
	img: './MachineLearningDeepLearning.png',
}, {
	label: 'Text Mining & Natural Language Processing',
	img: './TextMiningNLP.png',
}, {
	label: 'Computer Vision',
	img: './ComputerVision.png',
}, {
	label: 'Audio & Speech AI',
	img: './AudioSpeechAI.jpg',
}, {
	label: 'Explainable & Secure AI',
	img: './ExplainableSecureAI.jpg',
}, {
	label: 'Data Mining & Expert Systems ',
	img: './DataMiningExpertSystems.png',
}, {
	label: 'Big Data & Business Intelligence ',
	img: './BigDataBI.png',
}];

export default function DomainTabs() {
	const bg = useColorModeValue('white.400', 'portage');
	const [currIdx, setIdx] = useState(0);
	return (
		<Flex
		mt="30px">
			<Box 
			ml="30px" 
			borderRadius="20px"
			backgroundColor={bg} pt="10px" 
			h="450px"
			pb="10px"
			mb="15px"
			w="300px">
				{whatWeDoList.map((item, idx) => {
					if(currIdx === idx) {
						return (
							<Text
							mt="20px"
							ml="10px" mr="10px" padding="10px"
							color="#fff" fontWeight={600} fontSize="1.1rem"
							fontFamily="Open Sans" fontSize="1rem" 
							style={{lineHeight:"1.2rem"}}
							cursor="pointer"
							borderLeft="5px" borderStyle="solid" borderColor="#fff">
								{item.label}
							</Text>
						)
					}
					return (
						<Text 
						onClick={()=>setIdx(idx)}
						cursor="pointer"
						mt="25px"
						mb="25px"
						lineHeight="1.1rem"
						marginLeft="26px"
						fontFamily="Open Sans" fontSize="1rem" fontWeight="200">
							{item.label}
						</Text>
					)
				})}
			</Box>
			<Box
			width="560px"
			ml="40px">
				<Image 
				style={{border: '1px solid #ececec'}}
				ml="10px"
				mt="10px"
				mb="10px"
				src={whatWeDoList[currIdx].img}/>
			</Box>
		</Flex>
	)
}