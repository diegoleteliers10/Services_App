import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../../utils/colors/Colors'
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_microsoft" });
  const onLogin = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();
      console.log("done");
      console.log({ createdSessionId }); // ""
      console.log({ createdSessionId }, "session started"); //
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  });


  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('')} style={styles.loginImage}/>
      <View style={styles.subContainer}>
        <Text style={{fontSize:23, textAlign:'center', color:Colors.WHITE}}>Let's find <Text style={{fontWeight:'900'}}>Professional Cleaning and repair</Text> Services</Text>
        <Text style={{fontSize:15, textAlign:'center', color:Colors.WHITE, marginTop:20}}>Best App to find services near you which deliver you a professional service</Text>
        <TouchableOpacity style={{backgroundColor:Colors.WHITE, marginTop:40,padding:15,borderRadius:9999}} onPress={onLogin}>
          <Text style={{color:Colors.PRIMARY, textAlign:'center',fontSize:17,fontWeight:'700'}}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  loginImage:{
    width:230,
    height:450,
    marginTop:70,
    borderWidth:4,
    borderColor:Colors.BLACK,
    borderRadius:20
  },
  subContainer: {
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'70%',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    marginTop:-20,
    padding:20
  }
})