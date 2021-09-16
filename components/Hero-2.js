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
    <HStack justifyContent="center" alignItems="center" pt="100px">
      <VStack spacing="150px">
        <Heading
          fontSize="5vw"
          bgGradient="linear(to-l, #2d3848, #90cdf4)"
          textShadow="10 10 10 10px rgba(0, 0, 0, 0.5)"
          boxShadow="10 10 10 10px rgba(0, 0, 0, 0.5)"
          bgClip="text"
        >
          {title}
        </Heading>
        {/* <Text color={color}>Click to continue.</Text> */}
      </VStack>
    </HStack>
  );
};

Hero.defaultProps = {
  title: 'NextCar',
};
