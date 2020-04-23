import * as React from 'react'
import {View} from "react-native";
import NextScreenButtonAndroid from "../../navigation/NextScreenButtonAndroid";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Example1 from "./Example1/Example1";
import Example2 from "./Example2/Example2";

const TopTab = createMaterialTopTabNavigator();

const Animated = (props) => {
  return (
    <View style={{flex: 1}}>
      <TopTab.Navigator
        initialRouteName='AnimationsExample1'
        backBehavior='order'
      >
        <TopTab.Screen
          name='AnimationsExample1'
          component={Example1}
          options={{
            title: 'animating styles'
          }}
        />
        <TopTab.Screen
          name='AnimationsExample2'
          component={Example2}
          options={{
            title: 'PanResponder'
          }}
        />
      </TopTab.Navigator>
      <NextScreenButtonAndroid {...props} />
    </View>
  )
};

export default Animated
