import { Box, Button, Center, Heading, Image } from 'native-base';
import { setAuthToken } from '../../commons/HttpClient';

// @ts-ignore
export const LoginScreen = ({navigation}) => {

  const doLogin = () => {
    setAuthToken('851f5ab3-e252-4dcc-8d65-6bf17ab3c1e4')
    navigation.navigate('Root')
  };

  const imageSrc = require('../../assets/alfred-img.png');

  return (
      <Center w="100%" h="90%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading mt="1" _dark={{color: "warmGray.200"}} color="coolGray.600" fontWeight="medium" size="xs">
            Welcome to
          </Heading>
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
            AlfredApp
          </Heading>

          <Image source={imageSrc} alt="Alfred Img" resizeMode="contain" size="2xl" my="16"/>

          <Button mt="2" colorScheme="muted" onPress={doLogin}>
            Sign in
          </Button>
        </Box>
      </Center>
  );
}
