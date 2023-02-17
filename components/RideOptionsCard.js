import { View, Text, SafeAreaView, TouchableOpacity, Image,FlatList } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selecTravelTimeInformation } from '../slices/navSlice'
import { ScrollView } from 'react-navigation'



const data=[
  {
      id:'321',
      title:'Regular',
      multiplier:1,
      image:'https://img.icons8.com/ios/100/null/sedan.png'
  
  },
  {
      id:'654',
      title:'XL',
      multiplier:1.2,
      image:"https://img.icons8.com/ios/100/null/van.png"
  },
  {
    id:'987',
    title:'XXL LUX',
    multiplier:1.75,
    image:"https://img.icons8.com/ios/100/null/bus2.png"
  }
];

const RideOptionsCard = () => {
  const navigation=useNavigation();
  const [selected,setSelected]=useState(null);
  const TravelTimeInformation=useSelector(selecTravelTimeInformation)

  const RATE=1.5;

  return (
    <SafeAreaView className='flex-grow'>
      <View>
      <TouchableOpacity onPress={()=>navigation.goBack()} className='absolute top-3 left-5 p-3 z-50 rounded-full'>
        <Icon name='chevron-left' type='fontawesome'/>
      </TouchableOpacity>
      <Text className="text-center py-5 text-xl">Select a Ride- {TravelTimeInformation?.distance.text}</Text>
      </View>
      <ScrollView>
      <FlatList contentContainerStyle={{flexGrow:1,flex:1}} data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item:{id,title,multiplier,image},item})=>(
        <TouchableOpacity onPress={()=>setSelected(item)} className={`py-3 flex-row items-center justify-between px-10 ${id===selected?.id && 'bg-gray-200'}`}>
        <Image source={{uri:image}} style={{height:60, width:60, resizeMode:'contain',tintColor:'#6366f1'}}/>
        <View className='ml-3'>
          <Text className='font-semibold text-lg'>{title}</Text>
          <Text>Travel time {TravelTimeInformation?.duration.text}</Text>
        </View>
        <Text className='text-lg text-black'>
          ...$
        </Text>
      </TouchableOpacity>
      )}/>
      </ScrollView>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Confirmed')} className={`bg-indigo-900 py-1.5 m-5 ${!selected && 'bg-gray-300'}`}>
          <Text className='text-center text-white text-xl'>Take {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard