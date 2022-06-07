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
} from "@chakra-ui/react";
import format from "date-fns/format";
import { useRouter } from "next/dist/client/router";
const NewsItem = ({ item }) => {
  const { id, summary, image, title, createdAt } = item;
  const colorLink = useColorModeValue("dark.400", "portage");
  const color = useColorModeValue("dark.400", "dark.200");
  const router = useRouter();
  return (
    <LinkBox
      boxShadow="0 0 6px 0 #8c8cf4"
      transition="all 0.4s"
      my={2}
      mx={{ base: "4", xl: "0" }}
      onClick={() => router.push(`news/${id}`)}
      _hover={{
        boxShadow: "1px 1px 12px #8c8cf4",
      }}
    >
      <Flex
        color="white"
        p={4}
        display={{ lg: "flex" }}
        className="box-lighting-alt"
        align="left"
        backgroundColor="white"
        flexFlow="row nowrap"
        key={1}
        _hover={{
        bg: "1px 1px 12px #8c8cf4",
      }}
      >
        <Box>
          <Center>
            <Image
              alt=""
              borderRadius="0.5em"
              src={image}
              w={{ base: "100%", lg: "320px" }}
              h="150px"
              objectFit="cover"
            />
          </Center>
        </Box>
        <Box flex="5" pl={{ sm: 0, lg: "8" }} mt={{ base: "4", lg: 0 }}>
          <Flex mb={{ base: "2", xl: "2" }}>
            <Text
              color={colorLink}
              textAlign="left"
              fontSize={{
                base: "0.8rem",
                xl: "0.9rem",
                "4K": "1.3rem",
              }}
            >
              {format(new Date(createdAt), "dd/MM/yyyy")}
            </Text>
            <Spacer />
          </Flex>

          <Link fontWeight="bold" _hover={{ opacity: "0.5" }} color={colorLink}>
            <Text
              fontSize={{
                base: "1.1rem",
                xl: "1.3rem",
                "4K": "2em",
              }}
            >
              {title}
            </Text>
          </Link>
          <Text
            mt={2}
            pr={4}
            textAlign="justify"
            lineHeight={{ "4K": "1.2" }}
            color={color}
            noOfLines={4}
            overflow="hidden"
            text-overflow="ellipsis"
            fontSize={{
              base: "1.1rem",
              xl: "1.1rem",
              "4K": "1.7rem",
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: summary,
              }}
            />
          </Text>
        </Box>
      </Flex>
    </LinkBox>
  );
};

export default NewsItem;
