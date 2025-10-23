import {Box, LinkBox, Text} from "@chakra-ui/react"
import {Icon} from "@chakra-ui/react"
import {useRouter} from "next/dist/client/router"

const NavItem = ({label, icon, url}) => {
    const router = useRouter();
    return (
        <LinkBox pl="15px">
            <Box d="flex" alignItems="center">
                {/*<Box as="svg"
                    boxSize={
                        {base: '1.2rem'}
                    }
                    role="img">
                    <Icon fontSize="1.2rem" color="#25283D"
                        as={icon}/>
                </Box>*/}
                <Box verticalAlign="middle">
                    <Text onClick={
                            () => router.push(url)
                        }
                        cursor="pointer"
                        ml="8px"
                        fontSize="1.2rem"
                        fontWeight="400"
                        color="#25283D">


                        {label}</Text>
                </Box>
            </Box>
        </LinkBox>
    )
}

export default NavItem
