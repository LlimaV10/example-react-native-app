import * as React from 'react'
import {View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Code from "./Code";
import Result from "./Result";

const Stack = createStackNavigator();

const Example3 = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName='Result'
        mode='modal'
        screenOptions={{header: () => {}}}
      >
        <Stack.Screen
          name='Code'
          component={Code}
        />
        <Stack.Screen
          name='Result'
          component={Result}
        />
      </Stack.Navigator>
    </View>
  )
};

export default Example3
