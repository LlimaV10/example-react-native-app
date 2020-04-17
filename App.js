import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import CustomHeader from "./navigation/CustomHeader";
import DrawerNavigator from "./navigation/DrawerNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#f4511e'
        translucent
      />
      <Stack.Navigator
        initialRouteName='Root'
        mode='modal'
        headerMode='screen'
        screenOptions={{
          header: props => <CustomHeader {...props} />,
          // ---> Next attributes could be used if `header` don't specified
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          //   height: 56,
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}
      >
        <Stack.Screen name='Root' component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
