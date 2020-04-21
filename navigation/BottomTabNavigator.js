import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navItemsIos from "../data/nav-items-ios";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = navItemsIos[0].name;

const BottomTabNavigator = ({navigation, route}) => {
  const routeIndex = route.state?.index ?? 0;
  navigation.setOptions({ headerTitle: navItemsIos[routeIndex].headerTitle, index: routeIndex });

  const screens = navItemsIos.map((item) => {
    return (
      <Tab.Screen
        key={item.index}
        name={item.name}
        component={item.component}
        options={{
          title: item.navTitle,
          tabBarIcon: ({color, size }) => {
            return (
              <Icon
                name={item.iosIcon}
                size={size}
                color={color}
              />
            )
          }
        }}
        initialParams={{
          screenIndex: item.index,
        }}
      />
    )
  });

  return (
    <Tab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      backBehavior='order'
      drawerType='back'
    >
      {screens}
    </Tab.Navigator>
  )
};

export default BottomTabNavigator
