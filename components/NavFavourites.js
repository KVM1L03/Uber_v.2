import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

const data=[
{
    id:'123',
    icon:'home',
    location:'Home',
    destination:'Ul.Sezamkowa 1, Uganda'

},{
    id:'456',
    icon:'briefcase',
    location:'Work',
    destination:'Ul.Sezamkowa 13, Uganda'
}];


const NavFavourites = () => {
    
  return (
    <FlatList 
    data={data}
    keyExtractor={(item)=>{item.id}}
    ItemSeparatorComponent={()=>(
        <View className='bg-indigo-200' style={{height:1.2}}/>
    )}
    renderItem={({item:{location,destination,icon}})=>(
        <TouchableOpacity className="flex-row items-center p-3">
            <Icon className="mr-4 rounded-full bg-indigo-200 p-3"
            name={icon}
            type="ionicon"
            color="white"
            size={18}/>
            <View>
                <Text className="font-semibold text-sm">{location}</Text>
                <Text className="text-indigo-400">{destination}</Text>
            </View>
        </TouchableOpacity>
    )}/>
  )
}

export default NavFavourites