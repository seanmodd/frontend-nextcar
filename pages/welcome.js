import {
  Flex,
  Box,
  useColorMode,
  Link as ChakraLink,
  Text,
  Code,
  Heading,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero-2';
import { Main } from '../components/Main';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import SingleCar from '../components/chakra/SingleCar/App';

function App() {
  return (
    // <Container>
    <MyContainer>
      <Hero />
      <SingleCar />
      <SingleCar />
      <SingleCar />
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
