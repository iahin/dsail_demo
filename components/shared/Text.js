import { Text, useColorModeValue } from "@chakra-ui/react";

const HeaderTitle = ({style, color, label, hideBorder}) => {
	const bg = "#3758FF"
	console.log('Bg: ', bg)
	let textColor = color ? color : bg;
	const borderColor = color ? color : '#8c8cf4';
	return (
		<Text 
		style={{
			borderBottom: hideBorder ? 'none': `2px solid ${borderColor}`,
		}}
		mb="10px"
		color={textColor} mr="30px" pt="30px" ml="30px" fontWeight="600" fontSize="2.3rem"
		{...style}>
		{label}
		</Text>
	)
}

const Para = ({style, color, children}) => {
	const paraColor = useColorModeValue('white.400', 'dark.200');
	return (
		<Text color={color ? color : paraColor} 
		m="30px" fontWeight="bold" 
		fontSize="1.2rem" pb="20px" fontFamily="sans-serif"
		{...style}>
			{children}
		</Text>
	)
}


export { HeaderTitle, Para }
