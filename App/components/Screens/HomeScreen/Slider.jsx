import { View, Text, FlatList,StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../../utils/GlobalApi'

export default function Slider() {

  const [slider,setSlider]=useState()

  useEffect(()=>{
    getSliders()
  },[])

  const getSliders=()=>{
    GlobalApi.getSlider()
    .then((res)=>{
      console.log(res?.sliders)
      setSlider(res?.sliders)
    })
  }

  return (
    <View>
      <Text style={styles.titleText}>Offers for you</Text>
      <FlatList
        horizontal
        data={slider}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
          <View style={{marginRight:20}}>
            <Image source={{uri:item?.image?.url}} style={styles.imageSlider}/>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleText:{
    fontSize:20,
    fontFamily:'Outfit-Medium',
    marginBottom:10,
  },
  imageSlider:{
    width:270,
    height:150,
    borderRadius:20,
    objectFit:'contain',
  }
});