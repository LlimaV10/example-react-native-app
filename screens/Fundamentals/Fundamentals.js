import * as React from 'react'
import {View} from "react-native";
import NextScreenButtonAndroid from "../../navigation/NextScreenButtonAndroid";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";

const TopTab = createMaterialTopTabNavigator();

const Fundamentals = (props) => {
  return (
    <View style={{flex: 1}}>
      <TopTab.Navigator
        initialRouteName='FundamentalsExample1'
        backBehavior='order'
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {width: 120}
        }}
      >
        <TopTab.Screen
          name='FundamentalsExample1'
          component={Example1}
          options={{
            title: 'ViewText'
          }}
        />
        <TopTab.Screen
          name='FundamentalsExample2'
          component={Example2}
          options={{
            title: 'component'
          }}
        />
        <TopTab.Screen
          name='FundamentalsExample3'
          component={Example3}
          options={{
            title: 'props'
          }}
        />
        <TopTab.Screen
          name='FundamentalsExample4'
          component={Example4}
          options={{
            title: 'state'
          }}
        />
        <TopTab.Screen
          name='FundamentalsExample5'
          component={Example5}
          options={{
            title: 'image'
          }}
        />
      </TopTab.Navigator>
      <NextScreenButtonAndroid {...props} />
    </View>
  )
};

export default Fundamentals
