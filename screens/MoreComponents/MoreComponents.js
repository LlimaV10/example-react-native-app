import * as React from 'react'
import {View} from "react-native";
import NextScreenButtonAndroid from "../../navigation/NextScreenButtonAndroid";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Example1 from "./Example1/Example1";
import Example2 from "./Example2/Example2";
import Example3 from "./Example3/Example3";
import Example4 from "./Example4/Example4";

const TopTab = createMaterialTopTabNavigator();

const MoreComponents = (props) => {
  return (
    <View style={{flex: 1}}>
      <TopTab.Navigator
        initialRouteName='MoreComponentsExample1'
        backBehavior='order'
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {width: 120}
        }}
      >
        <TopTab.Screen
          name='MoreComponentsExample1'
          component={Example1}
          options={{
            title: 'TextInput'
          }}
        />
        <TopTab.Screen
          name='MoreComponentsExample2'
          component={Example2}
          options={{
            title: 'ScrollView'
          }}
        />
        <TopTab.Screen
          name='MoreComponentsExample3'
          component={Example3}
          options={{
            title: 'FlatList'
          }}
        />
        <TopTab.Screen
          name='MoreComponentsExample4'
          component={Example4}
          options={{
            title: 'SectionList'
          }}
        />
      </TopTab.Navigator>
      <NextScreenButtonAndroid {...props} />
    </View>
  )
};

export default MoreComponents
