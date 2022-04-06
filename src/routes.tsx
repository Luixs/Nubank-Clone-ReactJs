import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//------------------- SCREENS
import Home from './screens/Home';
import Init from './screens/Init';
//----------------------------

const Stack = createNativeStackNavigator();

function Routes() {
return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Init" component={Init} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
);
}

export default Routes;