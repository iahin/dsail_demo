/* eslint-disable react/jsx-key */
import {Box, Flex, VStack} from "@chakra-ui/react"
import NavItem from "./NavItem"


const DesktopNav = ({items}) => {
    return (
        <Flex display={
                {
                    base: 'none',
                    lg: 'flex',
                    xl: 'flex'
                }
            }
            position="absolute"
            right="100px"
            top="20px">

            {
            items.map(item => (
                <NavItem label={
                        item.label
                    }
                    url={
                        item.url
                    }
                    icon={
                        item.icon
                    }/>
            ))
        } </Flex>
    )
}

export default DesktopNav
