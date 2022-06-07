/* eslint-disable jsx-a11y/alt-text */
import {
    Box,
    Collapse,
    Flex,
    IconButton,
    Image,
    useColorModeValue
} from "@chakra-ui/react"
import DesktopNav from "./navigation/DesktopNav";
import {
    IoMdCall,
    IoMdPeople,
    IoIosConstruct,
    IoIosHome,
    IoIosPaper,
    IoIosToday
} from "react-icons/io"
import MobileNav from "./navigation/MobileNav";
import {useState} from "react";
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {useRouter} from "next/dist/client/router";

const items = [
    {
        label: 'Home',
        //icon: IoIosHome,
        url: '/'
    },
    {
        label: 'News',
        //icon: IoIosToday,
        url: '/news'
    },
    {
        label: 'Sample Projects',
        //icon: IoIosConstruct,
        url: '/projects'
    },
    {
        label: 'Publications',
        //icon: IoIosPaper,
        url: '/publications'
    }, {
        label: 'People',
        //icon: IoMdPeople,
        url: '/people'
    }, {
        label: 'Contacts',
        //icon: IoMdCall,
        url: '/contact'
    }
]

const Sidebar = () => {
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();
    return (
        <>
            <Flex zIndex="9999"
                py={
                    {
                        base: 0,
                        '4K': 5
                    }
                }
                pt="5px"
                pb="5px"
                position="fixed"
                width="100%"
                backgroundColor="#ffffff"
                boxShadow="xl"
                height="70px">
                <Image onClick={
                        () => router.push('/')
                    }
                    pl="120px"
                    pt="10px"
                    height="50px"
                    src={'./dsail-logo.png'}
                    href="/"
                    cursor="pointer"/>
                <DesktopNav items={items}/>
                <Box display={
                    {
                        base: 'flex',
                        lg: 'none',
                        xl: 'none'
                    }
                }>
                    <Flex pl="15px" pt="8px">
                        <IconButton onClick={
                                () => setOpen(!isOpen)
                            }
                            icon={
                                isOpen ? (
                                    <CloseIcon boxSize={6}/>
                                ) : (< HamburgerIcon color = '#373FFC' boxSize =

                                    { 10
                                } />)
                            }
                            variant={'unstyled'}
                            aria-label={'Toggle Navigation'}
                            w={12}/>
                    </Flex>
                </Box>
            </Flex>
            <Collapse style={
                    {minWidth: '650px'}
                }
                bg="#373ffc"
                in={isOpen}
                w="100%"
                animateOpacity>
                <MobileNav setOpen={setOpen}
                    items={items}/>
            </Collapse>
        </>
    )
}

export default Sidebar
