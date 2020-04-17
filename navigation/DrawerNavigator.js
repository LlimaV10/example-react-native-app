import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import navItems from "./../data/nav-items"
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = navItems[0].name;

const DrawerNavigator = ({navigation, route}) => {
  const routeIndex = route.state?.index ?? 0;
  navigation.setOptions({ headerTitle: navItems[routeIndex].headerTitle, index: routeIndex });

  const screens = navItems.map((item) => {
    return (
      <Drawer.Screen
        key={item.index}
        name={item.name}
        component={item.component}
        options={{
          title: item.navTitle,
        }}
        initialParams={{
          screenIndex: item.index,
        }}
      />
    )
  });

  return (
    <Drawer.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      backBehavior='order'
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerType='back'
    >
      {screens}
    </Drawer.Navigator>
  )
};

export default DrawerNavigator
