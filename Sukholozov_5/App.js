import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/Start';
import Detail from './screens/Detail';
import Desc from './screens/Desc';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: 'Горы' }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: 'Подробнее' }} />
        <Stack.Screen
          name="Desc"
          component={Desc}
          options={{ title: 'Описание' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}