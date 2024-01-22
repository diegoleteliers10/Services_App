import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreeen from '../components/Screens/HomeScreen/HomeScreen'
import ProfileScreen from '../components/Screens/ProfileScreen/ProfileScreen'
import BookingScreen from '../components/Screens/BookingScreen/BookingScreen'
import color from '../../utils/colors/Colors'
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:color.PRIMARY, tabBarStyle:{height:60}}}>
      <Tab.Screen name='home' component={HomeScreeen} options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color, fontSize:12,marginBottom:6}}>Home</Text>
        ),
        tabBarIcon:({color, size})=>(
          <FontAwesome name="home" size={size} color={color} 
          style={{marginTop:10}}/>
        )
      }}/>
      <Tab.Screen name='booking' component={BookingScreen} options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color, fontSize:12,marginBottom:6}}>Booking</Text>
        ),
        tabBarIcon:({color, size})=>(
          <FontAwesome name="book" size={size} color={color} 
          style={{marginTop:10}}/>
        )
      }}/>
      <Tab.Screen name='profile' component={ProfileScreen} title={null} options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color, fontSize:12,marginBottom:6}}>Profile</Text>
        ),
        tabBarIcon:({color, size})=>(
          <FontAwesome name="user-circle" size={size} color={color} 
          style={{marginTop:10}}/>
        )
      }}/>
    </Tab.Navigator>
  )
}