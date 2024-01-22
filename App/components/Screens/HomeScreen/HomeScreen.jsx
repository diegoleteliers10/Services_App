import { View, Text } from 'react-native'
import React from 'react'
import {useAuth, useUser} from '@clerk/clerk-expo'
import Header from './Header'
import Slider from './Slider'

export default function HomeScreen() {

  //TODO: add signOut button to the app
  // const SignOut = () => {
  //   const { isLoaded,signOut } = useAuth();
  //   if (!isLoaded) {
  //     return null;
  //   }
  //   return (
  //     <View>
  //       <Button
  //         title="Sign Out"
  //         onPress={() => {
  //           signOut();
  //         }}
  //       />
  //     </View>
  //   );
  // };


  // const { isLoaded, userId, sessionId, getToken } = useAuth();
 
  // // In case the user signs out while on the page.
  // if (!isLoaded || !userId) {
  //   return null;
  // }

  return (
    <View>
      <Header/>
      <View style={{padding:20}}>
        <Slider/>
      </View>
    </View>
  )
}