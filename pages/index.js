/* eslint-disable jsx-a11y/alt-text */
import {
    Center,
    SimpleGrid,
    Text,
    Box,
    Image,
    useColorModeValue,
    Button,
    Container,
    VStack
} from "@chakra-ui/react";
import NewsItem from "../components/news/NewsItem";
import {IoIosToday} from "react-icons/io";
import NewsList from "../components/news/NewsList";
import {HeaderTitle, Para} from "../components/shared/Text";
import {useRouter} from "next/dist/client/router";
import DomainTabs from "../components/DomainTabs";

export default function Home() {
    const router = useRouter();
    return (
        
        <Box>

            <Box>
                <Image width="100%" src="./hero-image.png"/>
            </Box>

            <VStack spacing={4} align='center'>

                <SimpleGrid columns={2} background="#f8f9fb">
                    <Box boxShadow="xl" m="50px">
                        <HeaderTitle label="Who we are"/>
                        <Para>
                            Data Science & AI Lab(DSAIL, also stands for “Data Sail”) is a
                            research center on data science and artificial intelligence anchored
                            in SIT(Singapore Institute of Technology).We aim to provide data -
                            driven innovation solutions and research to promote the AI
                            transformation of society and industries.
                        </Para>
                    </Box>
                    <Box>
                        <Image margin="0 auto" marginTop="70px" marginBottom="50px" src="./home_whoweare.png" borderRadius="full" width="500px" height="400px"/>
                    </Box>
                </SimpleGrid>

                <SimpleGrid columns={2}>
                    <Box>
                        <DomainTabs/>
                    </Box>
                    <Box boxShadow="xl" m="50px" background="white">
                        <HeaderTitle label="What we do" style={{textAlign:"right"}}/>
                        <Para>
                            We develop scalable and intelligent systems and solutions to
                            tackle different real-world issues leveraging on data and
                            technology. Our research brings together the field of data
                            science, artificial intelligence, big data and analytics. In
                            particular, our major research interests, but not limited to, are
                            provided as follows.
                        </Para>
                    </Box>
                </SimpleGrid>
                
                <Box boxShadow="xl" m="50px" background="white">
                    <HeaderTitle hideBorder={true} label="Our Vision" style={{textAlign:"center"}}/>
                    <Para style={{textAlign:"center"}}>
                        A premier lab in applied research and innovation for data
                        science and artificial Intelligence to transform society and
                        industry via big data.
                    </Para>
                    <HeaderTitle hideBorder={true} label="Our Mission" style={{textAlign:"center"}}/>
                    <Para style={{textAlign:"center"}}>
                        To research and develop AI solutions to empower industry and
                        individuals for automation and intelligence.
                    </Para>
                </Box>

                <SimpleGrid columns={2}>
                    <box>
                        <Image margin="0 auto" marginTop="70px" src="./home_howwedoit.png" borderRadius="full" width="500px" height="400px"/>
                    </box>
                    <Box boxShadow="xl" m="50px" background="white">
                        <HeaderTitle label="How we do it"/>
                        <Para>
                            <div marginBottom="10px" >
                                1) We work closely and extensively with our collaborators
                                including the industry sectors, government agencies, local and
                                international IHLs.
                            </div>
                            <div marginBottom="10px" >
                                2) We help our collaborators identify and shape their data and
                                AI problem statements, propose and develop innovative solutions
                                to tackle their challenges. Our projects are normally funded by
                                industries, SIT internal fundings, and external fundings from
                                funding agencies such as NRF, MOE and LTA.
                            </div>
                            <div marginBottom="10px" >
                                3) We also provide consultancy and professional/talent training
                                on data science and AI domains.
                            </div>
                        </Para>
                    </Box>
                    
                </SimpleGrid>

                <SimpleGrid columns={2}>
                    <Box boxShadow="xl" m="50px" background="white">
                        <HeaderTitle label="Our Collaborations"/>
                        <Para>
                            Our research at SIT spans across a diverse range of applied
                            interdisciplinary domains including transport, logistics,
                            telecommunications, healthcare and cyber security. Completed and
                            ongoing projects include industry collaborations with PSA
                            International, Singapore Telecommunications Limited (SingTel), DSO
                            National Laboratories, Land Transport Authority (LTA), Singapore
                            Mass Rapid Transit Corporation (SMRT), Custodio Technologies,
                            Ampotech Pte Ltd, Singapore Power and National Healthcare Group
                            Polyclinics.
                        </Para>
                    </Box>
                    <box>
                        <Image margin="0 auto" marginTop="70px" src="./collaboration.jpg" borderRadius="full" width="500px" height="400px"/>
                    </box>
                </SimpleGrid>

                <Box pt="40px" pl="100px" pr="100px" background="#021229">
                    <SimpleGrid columns={2} pb="20px">
                        <box>
                            <HeaderTitle label="Recent News" hideBorder={true} color="#fff" style={{m:"0px", p:"0px"}}/>
                        </box>
                        <box align="right">
                            <Button onClick={() => router.push("/news")}
                                        mt="10px"
                                        leftIcon={<IoIosToday/>}
                                        colorScheme="white.200"
                                        bg="#fff"
                                        color="black">
                                        <Text fontSize="1.1rem">View More</Text>
                            </Button>
                        </box>
                    </SimpleGrid>

                    <SimpleGrid md={4}>
                        <NewsList limit={4}/>
                    </SimpleGrid>
                    
                </Box>
            </VStack>
        </Box>
    );
}
