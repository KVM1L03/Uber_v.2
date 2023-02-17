import { View, Text,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux';
import {setDestination,setOrigin} from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView>
      <View className='pt-5 pr-10 mr-20'>
      <Image style={{height:30, resizeMode:'contain'}} source={{uri:'https://api.logo.com/api/v2/images?logo=logo_ab47c900-6674-4160-866a-c29dcfb00f1d&format=webp&margins=0&quality=60&width=500&background=transparent&u=1672001354'}} />
      </View>
      <View className="p-4">
      <GooglePlacesAutocomplete 
      styles={{
        
        textInput:{
          fontSize:16
        },
        container:{
          flex:0
        }
      }}
      placeholder='From where ?'
      minLength={2}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
      
      query={{
        key:GOOGLE_MAPS_APIKEY,
        language:'en'
      }}
      onPress={(data,details=null)=>{
        dispatch(setOrigin({
          location: details.geometry.location,
          description: data.description
          })
        )
        dispatch(setDestination(null))
      }}
      enablePoweredByContainer={false}
      fetchDetails={true}
      returnKeyType={'search'}
      />
        <NavOptions />
        <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen