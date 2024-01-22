import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SecureStore from "expo-secure-store";
import Login from './App/components/Screens/LoginScreen/Login';
import { ClerkProvider, SignedOut, SignedIn } from "@clerk/clerk-expo";
import HomeScreen from './App/components/Screens/HomeScreen/HomeScreen';
import TabNavigation from './App/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

export default function App() {

  const [fontsLoaded] = useFonts({
    'Outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  return (
    <ClerkProvider publishableKey="pk_test_ZG9taW5hbnQtb2N0b3B1cy01Ny5jbGVyay5hY2NvdW50cy5kZXYk">
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login/>
        </SignedOut>
        <StatusBar style="dark" />
      </View>
    </ClerkProvider>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  }
})