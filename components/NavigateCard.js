import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {GOOGLE_MAPS_APIKEY} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux'
import { selectOrigin, setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {
  const origin=useSelector(selectOrigin);
  const dispatch=useDispatch();
  const navigation=useNavigation();
  return (
    <SafeAreaView style={{flex:1}}>
      <Text className='text-center text-xl py-3'>Hello !</Text>
      <View className='border-t border-gray-200 flex-shrink'></View>
        <View className='p-3'>
          <GooglePlacesAutocomplete
          nearbyPlacesAPI='GooglePlacesSearch'
          placeholder='Where to?'
          fetchDetails={true}
          returnKeyType={'search'}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language:'en',
          }}
          debounce={400}
          styles={{
        
            textInput:{
              fontSize:16
            },
            container:{
              flex:0
            }
          }}
          onPress={(data,details=null)=>{
            dispatch(setDestination({
              location: details.geometry.location,
              description: data.description
            })
            );
            
            
          }}/>
        </View>
        <NavFavourites/>
      <View/>
      <View className="flex-row justify-evenly py-6">
        <TouchableOpacity onPress={()=>navigation.navigate("RideOptionsCard")} className='justify-between flex flex-row bg-indigo-500 w-24 px-4 py-3 rounded-full'>
          <Icon name='car' type='font-awesome' color='white' size={16}/>
          <Text className='text-white text-center'>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Food")} className='justify-between flex-row w-24 px-4 py-3 rounded-full bg-gray-200'>
          <Icon name='fast-food-outline' type='ionicon' color='#6366f1' size={16}/>
          <Text className='text-indigo-500 text-center'>Food</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard