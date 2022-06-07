import {
    Box,
    ChakraProvider,
    ColorModeProvider,
    ColorModeScript,
    Grid
} from '@chakra-ui/react'
import '../styles/globals.css'
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/400.css"
import theme from '../styles/theme'
import Sidebar from '../components/Sidebar'

function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider resetCSS
            theme={theme}>
            <ColorModeScript initialColorMode={
                theme.config.initialColorMode
            }/>
            <Box>
                <Sidebar/>
                <Box style={
                    {position: 'relative'}
                }>
                    <Component {...pageProps} />
                </Box>
            </Box>
        </ChakraProvider>
    )
}

export default MyApp
