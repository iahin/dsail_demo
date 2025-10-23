import {extendTheme} from '@chakra-ui/react';
import {createBreakpoints, mode} from '@chakra-ui/theme-tools';
import React from 'react';

// const fonts = { mono: `'Menlo', monospace` };
const fonts = {
    // body: "'SFProTextRegular', sans-serif",
    // heading: "'CircularStdBold', sans-serif",
    // mono: "'Menlo', monospace",
    heading: "Open Sans",
    body: "Open Sans"
};

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '60em',
    xl: '80em',
    '2xl': '105em',
    '2K': '128em',
    '4K': '240em',
    // 3840 x 2160 for 4K aka.. approx 240em if 1em = 16px.
});

const Button = { // The styles all button have in common
    baseStyle: {
        fontWeight: 'normal',
        lineHeight: 1.14,
        border: 0,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#000',
        borderRadius: '0.5rem',
        width: '168px'
    },
    // Two sizes: sm and md
    sizes: {
        sm: {
            fontSize: '12px',
            padding: '16px 33px'
        },
        md: {
            fontSize: '16px',
            padding: '24px'
        },
        '2K': {
            padding: '30px 106px',
            width: '30%',
            fontSize: '1.5em'
        }
    },
    // The default size and variant values
    defaultProps: {
        size: 'md'
    }
};

const Input = {
    baseStyle: (props) => (
        {
            fontSize: {
                '2K': '1.5em',
                '4K': '1.5em'
            }
        }
    )
};

const Select = {
    baseStyle: (props) => (
        {
            fontSize: {
                '2K': '1.5em',
                '4K': '1.5em'
            }
        }
    )
};

const Switch = { // The styles all button have in common
    baseStyle: (props) => (
        {
            track: {
                bg: mode('dark.600', 'teal')(props),
                width: '30px',
                height: '10%',
                position: 'relative',
                top: 4,
                borderRadius: '8px'
            },
            thumb: {
                bg: 'violet',
                position: 'relative',
                width: '20px',
                height: '20px',
                borderRadius: '100%',
                bottom: '8px'
            }
        }
    ),
    // Two sizes: sm and md
    sizes: {
        sm: {
            track: {
                width: '17.5px',
                height: '1px',
                position: 'relative',
                top: '7px',
                borderRadius: '8px'
            },
            thumb: {
                position: 'relative',
                width: '10px',
                height: '10px',
                borderRadius: '100%',
                bottom: '4px'
            }
        },
        md: {
            track: {
                width: '30px',
                height: '10%',
                position: 'relative',
                top: 4,
                borderRadius: '8px'
            },
            thumb: {
                position: 'relative',
                width: '20px',
                height: '20px',
                borderRadius: '100%',
                bottom: '8px'
            }
        },
        lg: {
            track: {
                width: '45px',
                height: '10%',
                position: 'relative',
                top: 4,
                borderRadius: '8px'
            },
            thumb: {
                position: 'relative',
                width: '25px',
                height: '25px',
                borderRadius: '100%',
                bottom: '9px',
                _checked: {
                    bWebkitTransform: ' translateX(26px)'
                }
            }
        }
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'green.500'
        },
        solid: {
            bg: 'green.500',
            color: 'white'
        }
    },
    // The default size and variant values
    defaultProps: {
        size: 'sm',
        variant: 'outline'
    }
};

const SearchIcon = {
    baseStyle: (props) => (
        {
            color: mode('dark.400', 'teal')(props),
            fontSize: '1.5em'
        }
    ),
    sizes: {
        '4K': {
            fontSize: '3em'
        }
    }
};

const Heading = {
    baseStyle: (props) => (
        {
            color: mode('dark.400', 'teal')(props),
            fontSize: '1.5em',
            fontFamily: 'd-dindin-bold,Roboto Bold'
        }
    ),
    sizes: {
        xl: {
            fontSize: '1.8em'
        },
        '4K': {
            fontSize: '5em'
        }
    }
};

const Link = {
    baseStyle: (props) => (
        {
            color: mode('dark.400', 'teal')(props),
            _hover: {
                opacity: 0.5,
                color: mode('dark.400', 'teal')(props)
            }
        }
    )
};

const Text = {
    baseStyle: (props) => (
        {fontSize: '1.2em', fontFamily: 'Open Sans, sans-serif'}
    ),
    sizes: {
        xl: {
            fontSize: '1.8em'
        },
        '2K': {
            fontSize: '1.2em'
        },
        '4K': {
            fontSize: '1.2em'
        }
    }
};

const ListItem = {
    baseStyle: (props) => (
        {fontFamily: 'Open Sans, sans-serif'}
    )
};

const Badge = {
    baseStyle: (props) => (
        {
            p: '5px 1rem',
            color: mode('dark.200', 'dark.200')(props),
            fontSize: '.7em',
            fontWeight: 'normal',
            borderRadius: '16px',
            backgroundColor: '#03e1ff!important'
        }
    )
};

const Divider = {
    baseStyle: (props) => (
        { // borderColor: mode('gray.500','gray.200')(props)
            borderColor: mode('gray.300',)(props)
        }
    )
}

// 2. Add your color mode config
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
};

const Box = {
    baseStyle: (props) => (
        {w: '100%'}
    )
};
const styles = {
    // global: props => ({
    // body: {
    //     color: mode('gray.800', 'whiteAlpha.900')(props),
    //     bg: mode('black', '')(props),
    // },
    // }),
    global: (props) => (
        { // styles for the `body`
            body: {
                bg: mode('white.400', 'white.200')(props),
                // overflowY: 'auto',
                // overflowX: 'hidden',
                fontFamily: 'd-dinregular, Roboto Regular'
            },
            // styles for the `a`
            a: {
                _hover: {
                    textDecoration: 'underline'
                }
            },
            li: {
                textAlign: 'left',
                fontWeight: '300',
                fontSize: 'Opens Sans, sans-serif'
            },
            // p: {},
            // h1: { color: mode('dark.400', 'teal')(props) },
            // h2: { color: mode('dark.400', 'teal')(props) },
            // h3: { color: mode('dark.400', 'teal')(props) },
            // h4: { color: mode('dark.400', 'teal')(props) },
            // h5: { color: mode('dark.400', 'teal')(props) },
            // h6: { color: mode('dark.400', 'teal')(props) },
        }
    )
};

const theme = extendTheme({
    colors: {
        darkblue: '#151B25',
        selago: '#E2EFFB',
        jordyblue: '#999EFB',
        cornflower: '#82A4E3',
        portage: "#3758FF",
        black: '#0c1b28',
        teal: '#00ffa3',
        lightblue: '#03e1ff',
        normalblue: '#0366d6',
        violet: '#dc1fff',
        white: {
            200: '#fff',
            400: '#F7F7F7',
            600: '#f8f8f8'
        },
        dark: {
            200: '#212121',
            400: "#3758FF",
            600: '#343434'
        }
    },
    styles,
    fonts,
    breakpoints,
    config,
    icons: {
        logo: {
            path: (
                <svg width="3000" viewBox="0 0 3000 3163" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="3000" fill="none"/>
                    <path d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z" fill="currentColor"/>
                </svg>
            ),
            viewBox: '0 0 3000 3163'
        }
    },
    components: {
        Button,
        Badge,
        Heading,
        Text,
        Switch,
        Box,
        Link,
        Input,
        Select,
        Divider,
        ListItem
    }
});

export default theme;
