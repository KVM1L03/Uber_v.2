import { View, Text,TouchableOpacity, Image  } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { setOrigin } from '../slices/navSlice';


const NavOptions = () => {
  const navigation = useNavigation();
  const origin=useSelector(setOrigin); 
  console.log(origin)
  return (
    <View className='items-center'>
      <TouchableOpacity className={`p-2 pl-6 pb-8 pt-4 bg-indigo-200 m-2 w-40 items-center rounded-xl`} onPress={() => navigation.navigate('MapScreen')}
        disabled={!origin.payload}>
        <View className={`${!origin && "opacity-20"}`}>
          <Image style={{height:100,width:100,resizeMode:'contain'}}
          source={{uri:"https://img.icons8.com/external-flaticons-flat-flat-icons/128/null/external-sports-car-motor-sports-flaticons-flat-flat-icons.png"}}/>
          <Text className='text-center text-lg font-semibold'>GO !</Text>
          <Icon className="p-2 mt-4 rounded-full bg-gray-500 w-10 self-center"
          name='arrowright'
          color={'white'}
          type='antdesign'/>
        </View>
      </TouchableOpacity>
    </View>
  )
}



export default NavOptions