import Link from 'next/link';
import {
  Flex,
  Box,
  useColorMode,
  Link as ChakraLink,
  useColorModeValue,
  Text,
  Code,
  Heading,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Main } from '../components/Main';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

function App() {
  const color = useColorModeValue('gray.900', '#ebebeb');
  return (
    // <Container>
    <MyContainer>
      <Hero />
      <Box w="100%" justify="center">
        <Text color={color} textAlign="center">
          <Link href="/welcome">Click to continue</Link>
        </Text>
      </Box>
    </MyContainer>
    // </Container>
  );
}

export default App;

export const MyContainer = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };

  const color = { light: 'black', dark: 'white' };
  return (
    <Box
      // borderWidth="4px"
      borderColor="red"
      direction="column"
      alignItems="center"
      minH="50vh"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
