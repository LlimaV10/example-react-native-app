import * as React from 'react'
import {View} from "react-native";
// import NextScreenButtonAndroid from "../../navigation/NextScreenButtonAndroid";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Example1 from "./Example1/Example1";
import Example2 from "./Example2/Example2";
import Example3 from "./Example3/Example3";
import Example4 from "./Example4/Example4";

const TopTab = createMaterialTopTabNavigator();

const Design = (props) => {
  return (
    <View style={{flex: 1}}>
      <TopTab.Navigator
        initialRouteName='DesignExample1'
        backBehavior='order'
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {width: 120}
        }}
      >
        <TopTab.Screen
          name='DesignExample1'
          component={Example1}
          options={{
            title: 'overlay'
          }}
        />
        <TopTab.Screen
          name='DesignExample2'
          component={Example2}
          options={{
            title: 'fixed dimensions'
          }}
        />
        <TopTab.Screen
          name='DesignExample3'
          component={Example3}
          options={{
            title: 'flex dimensions'
          }}
        />
        <TopTab.Screen
          name='DesignExample4'
          component={Example4}
          options={{
            title: 'combined dimensions'
          }}
        />
      </TopTab.Navigator>
      {/*<NextScreenButtonAndroid {...props} />*/}
    </View>
  )
};

export default Design
