import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import colors from '../../../../utils/colors/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {

  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return user&&(
    <View style={{padding:20,paddingTop:40,backgroundColor:colors.PRIMARY,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image source={{uri:user?.imageUrl}} style={styles.userImage}/>
            <View>
              <Text style={{color:colors.WHITE,fontFamily:'Outfit'}}>Welcome</Text>
              <Text style={{color:colors.WHITE,fontSize:20,fontFamily:'Outfit-Medium'}}>{user?.fullName}</Text>
            </View>
          </View>
        <FontAwesome name="book" size={24} color={colors.WHITE} />
      </View>
      <View style={{marginTop:20,display:'flex',flexDirection:'row',gap:10}}>
        <TextInput placeholder='Search' style={styles.textInput} placeholderTextColor={colors.PRIMARY}/>
        <FontAwesome name="search" size={20} color={colors.PRIMARY} style={{backgroundColor:colors.WHITE,padding:10,borderRadius:8}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  userImage:{
    width: 45,
    height:45,
    borderRadius:99,
  },
  profileContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  profileMainContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  textInput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor:colors.WHITE,
    borderRadius:8,
    width:'85%',
    textDecorationColor:colors.PRIMARY,
    fontFamily:'Outfit',
  }
});