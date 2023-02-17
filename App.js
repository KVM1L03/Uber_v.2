import { KeyboardAvoidingView, Platform } from 'react-native';
import {Provider} from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapScreen from './screens/MapScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
 

  return (
  <Provider store={store}>
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView style={{flex:1}}
          behavior={Platform.OS === "ios" ? "padding" : undefined}>
          <Stack.Navigator>
          <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown:false,

          }}/>
          <Stack.Screen
          name='MapScreen'
          component={MapScreen}
          options={{
            headerShown:false,
            
          }}/>
          
        </Stack.Navigator>
      </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

