import {
  ChakraProvider,
  useColorMode,
  IconButton,
  HStack,
  ColorModeProvider,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
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
        <DarkModeSwitch />
        <div className="scroll">
          <Component {...pageProps} />
        </div>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;

const DarkModeSwitch = ({ children }) => {
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
      <HStack backgroundColor={bgColor[colorMode]} w="100vw" justify="flex-end">
        <IconButton
          aria-label="Toggle Dark Switch"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          color={iconColor[colorMode]}
          marginRight="4rem"
          // bg={bgColor[colorMode]}
        >
          {children}
        </IconButton>
      </HStack>
    </>
  );
};
