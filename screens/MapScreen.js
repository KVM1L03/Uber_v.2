import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import Food from '../components/Food';
import Confirmed from '../components/Confirmed';



const MapScreen = () => {
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();

  return (
    <View>
      <View className='h-1/2'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon className="p-2 bg-red rounded-full w-10 mt-4"
          name='arrowleft'
          color={'black'}
          type='antdesign'/>
        </TouchableOpacity>
        <Map/>
      </View>
        
      <View className='h-1/2'>
        <Stack.Navigator>
          <Stack.Screen
          name='NavigateCard'
          component={NavigateCard}
          options={{headerShown:false}}/>
        
         <Stack.Screen
          name='RideOptionsCard'
          component={RideOptionsCard}
          options={{headerShown:false}}/>
        

        <Stack.Screen
          name='Food'
          component={Food}
          options={{headerShown:false}}/>

        <Stack.Screen
          name='Confirmed'
          component={Confirmed}
          options={{headerShown:false}}/>

        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen