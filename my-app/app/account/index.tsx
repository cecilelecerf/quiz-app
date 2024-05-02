import {
  Box,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  View,
} from '@gluestack-ui/themed';

import Constants from 'expo-constants';
import colors from '../../component/UIkit/Style/Colors';
// const Account = () => {
//   return (
//     <Stack initialRouteName='AccountHome'>
//       <Stack.Screen name='AccountHome' component={AccountHome} />
//       <Stack.Screen name='Setting' component={Settings} />
//     </Stack>
//   );
// };
const Account = () => {
  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <HStack
        style={{ justifyContent: 'space-between' }}
        paddingHorizontal='$5'
      >
        <Box>
          {/* <Ionicons
            name='medal'
            size={20}
            style={{
              backgroundColor: colors.primary.default,
              padding: 7,
              borderRadius: 30,
            }}
            color={colors.white}
          /> */}
        </Box>
        <Center>
          <Image
            size='md'
            rounded='$full'
            source={{
              uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            }}
            alt='image par default'
          />
          <Text pt='$3' color={colors.primary.default} bold>
            Cécile LECERF
          </Text>
        </Center>
        <Box>
          {/* <Ionicons
            name='settings'
            size={20}
            style={{
              backgroundColor: colors.primary.default,
              padding: 7,
              borderRadius: 30,
            }}
            color={colors.white}
          /> */}
        </Box>
      </HStack>
      <Center
        justifyContent='space-around'
        flexWrap='wrap'
        flexDirection='row'
        paddingVertical={40}
      >
        {[
          'Accessibilité',
          'Paramètres généraux',
          'Historique des contributions ',
          'Contacter le support',
        ].map((value, index) => (
          <Pressable
            key={index}
            w={150}
            h={200}
            mb={index < 2 ? '$20' : '$0'}
            bg={colors.white}
            $active-bg={colors.grey.light}
            shadowColor={colors.grey.dark}
            hardShadow='1'
            rounded='$md'
            paddingHorizontal='$3'
            onPress={() => console.log('uzfbuze')}
          >
            <Text textAlign='center' textAlignVertical='center' h='100%'>
              {value}
            </Text>
          </Pressable>
        ))}
      </Center>
    </View>
  );
};

export default Account;
