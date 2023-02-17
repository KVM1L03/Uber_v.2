import { View, Text, Image } from 'react-native'
import React from 'react'

const Confirmed = () => {
  return (
    <View classname='p-4'>
      <Image style={{height:100, width:100, resizeMode:'contain',alignItems:'center'}} source={{uri:"https://img.icons8.com/bubbles/100/null/fiat-500.png"}}/>
    </View>
  )
}

export default Confirmed