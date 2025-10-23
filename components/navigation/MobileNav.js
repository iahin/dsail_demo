import {
    Accordion,
    AccordionItem,
    Box,
    Flex,
    Icon,
    LinkBox,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import {useRouter} from "next/dist/client/router";


const MobileNavItem = ({
    setOpen,
    item: {
        icon,
        url,
        label
    }
}) => {
    const router = useRouter();
    return (
        <LinkBox w="100%" pl="15px">
            <Box d="flex" alignItems="center">
                {/*<Box as="svg"
                    boxSize={
                        {base: '1.2rem'}
                    }
                    role="img">
                    <Icon fontSize="1.2rem"
                        as={icon}/>
                </Box>*/}
                <Box verticalAlign="middle">
                    <Text onClick={
                            () => {
                                setOpen(false);
                                router.push(url)
                            }
                        }
                        cursor="pointer"
                        ml="8px"
                        fontSize="1.2rem"
                        fontWeight="400">
                        {label}</Text>
                </Box>
            </Box>
        </LinkBox>
    )
}

const MobileNav = ({items, setOpen}) => {
        const bg = useColorModeValue('white.400', 'portage');
        return(< Flex bg = "#373FFC" direction = "column" w = "100%" display = {{ lg: 'none', xl: 'none' }} > <Box pt="100px" pb="20px">


            {
            items.map((item) => (
                <MobileNavItem setOpen={setOpen}
                    item={item}
                    m="0"/>
            ))
        } </Box>
    </Flex>
    );
}

export default MobileNav
