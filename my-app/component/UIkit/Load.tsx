import { Center, Spinner, Image } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';
import colors from './Style/Colors';
const Load = () => {
  const styles = StyleSheet.create({
    load: {
      flex: 1,
      backgroundColor: colors.secondary.default,
    },
  });
  return (
    <Center style={styles.load}>
      <Image
        source={require('./../../assets/logo/white.png')}
        mb='$9'
        alt='Logo de Handymoov'
        style={{ width: 100, height: 100 }}
      />
      <Spinner size='large' color={colors.white} />
    </Center>
  );
};

export default Load;
