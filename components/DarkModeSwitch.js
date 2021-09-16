// import { useColorMode, IconButton } from '@chakra-ui/react';
import {
  useColorMode,
  IconButton,
  Button,
  HStack,
  Flex,
  Stack,
  Box,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function DarkModeSwitch({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  const bgColor = {
    light: 'gray.300',
    dark: 'black',
  };

  return (
    <div>
      <>
        <HStack align="center" justify="flex" px={80}>
          <IconButton
            aria-label="Toggle Dark Switch"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            color={iconColor[colorMode]}
            // bg={bgColor[colorMode]}
          >
            {children}
          </IconButton>
        </HStack>
      </>
    </div>
  );
}

export default DarkModeSwitch;
