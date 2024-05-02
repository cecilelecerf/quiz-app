import React, { useEffect, useState } from 'react';
import { Text, HStack, Pressable, ScrollView } from '@gluestack-ui/themed';
import Load from '../component/UIkit/Load';
import colors from '../component/UIkit/Style/Colors';
import { Link } from 'expo-router';
import { storeDataProps } from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Page() {
  interface TriviaCategories {
    id: number;
    name: string;
  }
  const [data, setData] = useState<{ trivia_categories: TriviaCategories[] }>({
    trivia_categories: [],
  });
  const storeData = async (storeKey: storeDataProps) => {
    try {
      await AsyncStorage.setItem(storeKey.key, storeKey.value);
    } catch (e) {
      // saving error
    }
  };
  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La récupération des données a échoué');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  if (data.trivia_categories.length > 0) {
    return (
      <ScrollView flex={1}>
        <HStack
          flexWrap='wrap'
          justifyContent='space-between'
          marginVertical='$3'
          paddingHorizontal='$6'
        >
          <Link href='/question' asChild>
            <Pressable
              w='100%'
              h={100}
              marginBottom='$5'
              bg={colors.primary.default}
              $active-bg={colors.primary.dark}
              shadowColor={colors.grey.dark}
              hardShadow='1'
              rounded='$md'
              paddingHorizontal='$2'
              onPress={() => (
                storeData({ key: 'category', value: '0' }),
                storeData({ key: 'validAnswer', value: '0' })
              )}
            >
              <Text
                textAlign='center'
                textAlignVertical='center'
                h='100%'
                color={colors.white}
              >
                Toutes catégories
              </Text>
            </Pressable>
          </Link>
          {data.trivia_categories.map((d, index) => (
            <Link href='/question' asChild key={index}>
              <Pressable
                w='40%'
                h={100}
                marginBottom='$5'
                bg={colors.white}
                $active-bg={colors.grey.light}
                shadowColor={colors.grey.dark}
                hardShadow='1'
                rounded='$md'
                paddingHorizontal='$2'
                onPress={() => (
                  storeData({ key: 'category', value: `${d.id}` }),
                  storeData({ key: 'validAnswer', value: '0' })
                )}
              >
                <Text textAlign='center' textAlignVertical='center' h='100%'>
                  {d.name}
                </Text>
              </Pressable>
            </Link>
          ))}
        </HStack>
      </ScrollView>
    );
  } else {
    return <Load />;
  }
}
