import 'react-native-gesture-handler';
import * as React from 'react';
import {Platform, StatusBar, YellowBox} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import CustomHeaderAndroid from "./navigation/CustomHeaderAndroid";
import DrawerNavigator from "./navigation/DrawerNavigator";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import CustomHeaderIos from "./navigation/CustomHeaderIos";

YellowBox.ignoreWarnings(['Require cycle:']);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={Platform.select({
            android: 'light-content',
            ios: 'dark-content'
        })}
        backgroundColor='#f4511e'
        translucent
      />
      <Stack.Navigator
        initialRouteName='Root'
        mode='modal'
        headerMode='screen'
        screenOptions={{
          header: props => Platform.select({
              android: <CustomHeaderAndroid {...props} />,
              ios: <CustomHeaderIos {...props} />
          }),
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
        <Stack.Screen
            name='Root'
            component={
                Platform.select({
                    ios: BottomTabNavigator,
                    android: DrawerNavigator
                })
            }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
