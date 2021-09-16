import {
  Flex,
  VStack,
  Text,
  Box,
  HStack,
  useColorModeValue,
  Image,
  useColorMode,
  Heading,
} from '@chakra-ui/react';

export const Hero = ({ title }) => {
  const color = useColorModeValue('gray.900', '#ebebeb');
  return (
    <HStack justifyContent="center" alignItems="center" pt="200px">
      <VStack spacing="150px">
        <Heading
          fontSize="10vw"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          {title}
        </Heading>
        <Text color={color}>Click to continue.</Text>
      </VStack>
    </HStack>
  );
};

Hero.defaultProps = {
  title: 'NextCar',
};
