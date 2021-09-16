import {
  ChakraProvider,
  useColorMode,
  IconButton,
  HStack,
  ColorModeProvider,
  Box,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavbarWithSubmenu from '../components/chakra/NavbarWithSubmenu/App';
import SimpleFooter from '../components/chakra/SimpleFooter/App';
import theme from '../styles/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <div className="scroll">
          <MyBox>
            <NavbarWithSubmenu />
            {/* <DarkModeSwitch /> */}

            <Component {...pageProps} />
            <SimpleFooter />
          </MyBox>
        </div>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
const MyBox = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900',
  };
  return (
    <>
      <Box
        minH="100vh"
        px={['0px', '0px', '0px', '0px']}
        bg={bgColor[colorMode]}
      >
        {children}
      </Box>
    </>
  );
};
