import React, { useEffect, useState } from 'react';
import {
  Card,
  Heading,
  Pressable,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';

import Load from '../component/UIkit/Load';
import { storeDataProps } from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../component/UIkit/Style/Colors';
import { Link } from 'expo-router';

export default function Page() {
  interface APIResponse {
    response_code: number;
    results: Question[];
  }
  interface Question {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }

  const [data, setData] = useState<APIResponse | null>(null);
  const [validAnswers, setValidAnswers] = useState<number>(0);
  const [numberAnswers, setNumberAnswers] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  const getData = async (key: storeDataProps['key']) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      // error reading value
    }
  };
  const fetchNewQuestion = async () => {
    const fetchStore = async () => {
      const category = await getData('category');
      const difficulty = await getData('difficulty');
      console.log(
        `https://opentdb.com/api.php?amount=20${
          category !== '0' ? `&category=${category}` : ''
        }${
          difficulty !== 'default' ? `&difficulty=${difficulty}` : ''
        }&type=multiple`,
      );
      fetch(
        `https://opentdb.com/api.php?amount=20${
          category !== '0' ? `&category=${category}` : ''
        }${
          difficulty !== 'default' ? `&difficulty=${difficulty}` : ''
        }&type=multiple`,
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('La récupération des données a échoué');
          }
          return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    };
    fetchStore();
  };
  const handleAnswerPress = (selectedAnswer: string, step: number) => {
    if (data) {
      const isCorrect = selectedAnswer === data.results[step].correct_answer;
      setStep((prev) => (prev < 19 ? prev + 1 : 0));
      if (isCorrect) {
        setValidAnswers((prev) => prev + 1);
      }
      setNumberAnswers((prev) => prev + 1);
    }
    if (step === 0) fetchNewQuestion();
  };
  useEffect(() => {
    fetchNewQuestion();
  }, []);

  if (data?.results[step]) {
    const question = data?.results[step];
    const response = [
      ...question?.incorrect_answers,
      question.correct_answer,
    ].sort();
    return (
      <View
        flex={1}
        justifyContent='center'
        alignContent='center'
        marginHorizontal='$10'
      >
        <Text textAlign='center' marginBottom='$3' fontWeight='bold'>
          {validAnswers} / {numberAnswers}
        </Text>
        <Card>
          <Heading
            textAlign='center'
            marginBottom='$10'
            color={colors.primary.default}
          >
            {question.question}
          </Heading>
          <VStack alignItems='center' space='md'>
            {response?.map((res, step) => (
              <Link href='/question' key={step} asChild>
                <Pressable
                  w={200}
                  h={75}
                  marginBottom='$5'
                  bg={colors.white}
                  $active-bg={colors.primary.dark}
                  shadowColor={colors.grey.dark}
                  hardShadow='1'
                  rounded='$md'
                  paddingHorizontal='$2'
                  onPress={() => handleAnswerPress(res, step)}
                >
                  <Text textAlign='center' textAlignVertical='center' h='100%'>
                    {res}
                  </Text>
                </Pressable>
              </Link>
            ))}
          </VStack>
        </Card>
      </View>
    );
  } else {
    return <Load />;
  }
}
