import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { BookDetail } from './screens'; 
import Tabs from './navigation/tabs';

const theme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors, 
    border: "transparent"
  }
}

const Stack = createStackNavigator();
const App = () =>{
    return(
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen name="Home" component={Tabs}/>
          <Stack.Screen name="BookDetail" component={BookDetail} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )

}
export default App