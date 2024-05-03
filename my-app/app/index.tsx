import { Image, Pressable, Text, VStack, View } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../component/UIkit/Style/Colors';
export interface storeDataProps {
  key: string;
  value: string;
}

const Home = () => {
  const storeData = async (storeKey: storeDataProps) => {
    try {
      await AsyncStorage.setItem(storeKey.key, storeKey.value);
    } catch (e) {
      // saving error
    }
  };
  return (
    <View
      justifyContent='center'
      alignItems='center'
      flex={1}
      paddingTop={Constants.statusBarHeight}
      bg={colors.secondary.default}
    >
      <Image
        source={require('../assets/logo/quiz.png')}
        w={200}
        h={150}
        alt='logo quizapp'
        style={{ objectFit: 'contain' }}
        marginBottom='$10'
      />
      <VStack space='md'>
        <Link href='/theme' asChild>
          <Pressable
            onPress={() => storeData({ key: 'difficulty', value: 'easy' })}
            bg={colors.white}
            w={200}
            paddingVertical='$3'
            borderRadius='$xs'
            $active-bg={colors.grey.default}
          >
            <Text color={colors.primary.default} textAlign='center'>
              Facile
            </Text>
          </Pressable>
        </Link>
        <Link href='/theme' asChild>
          <Pressable
            onPress={() => storeData({ key: 'difficulty', value: 'medium' })}
            bg={colors.white}
            w={200}
            paddingVertical='$3'
            borderRadius='$xs'
            $active-bg={colors.grey.default}
          >
            <Text color={colors.primary.default} textAlign='center'>
              Moyen
            </Text>
          </Pressable>
        </Link>
        <Link href='/theme' asChild>
          <Pressable
            onPress={() => storeData({ key: 'difficulty', value: 'hard' })}
            bg={colors.white}
            w={200}
            paddingVertical='$3'
            borderRadius='$xs'
            $active-bg={colors.grey.default}
          >
            <Text color={colors.primary.default} textAlign='center'>
              Difficile
            </Text>
          </Pressable>
        </Link>
        <Link href='/theme' asChild>
          <Pressable
            onPress={() => storeData({ key: 'difficulty', value: 'default' })}
            bg={colors.white}
            w={200}
            paddingVertical='$3'
            borderRadius='$xs'
            $active-bg={colors.grey.default}
          >
            <Text color={colors.primary.default} textAlign='center'>
              Toutes les difficultés
            </Text>
          </Pressable>
        </Link>
      </VStack>

      {/* 
          <Pressable
            onPress={() => storeData({ key: 'difficulty', value: 'default' })}
            bg={colors.white}
            w={200}
            paddingVertical='$3'
            borderRadius='$xs'
            $active-bg={colors.grey.default}
          >
            <Text color={colors.primary.default} textAlign='center'>
              Toutes les difficultés
            </Text>
          </Pressable>
       */}
    </View>
  );
};

export default Home;
