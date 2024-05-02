import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <GluestackUIProvider config={config}>
      <Tabs screenOptions={{ headerShown: false }} initialRouteName='maps' />
    </GluestackUIProvider>
  );
}
