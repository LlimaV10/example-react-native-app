import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navItems from "../data/nav-items";
import CustomDrawerContent from "./CustomDrawerContent";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = navItems[0].name;

const BottomTabNavigator = ({navigation, route}) => {
    const routeIndex = route.state?.index ?? 0;
    navigation.setOptions({ headerTitle: navItems[routeIndex].headerTitle, index: routeIndex });

    const screens = navItems.map((item) => {
        return (
            <Tab.Screen
                key={item.index}
                name={item.name}
                component={item.component}
                options={{
                    title: item.navTitle,
                    tabBarIcon: ({color, size }) => {
                        return (
                            <Ionicons
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
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerType='back'
        >
            {screens}
        </Tab.Navigator>
    )
};

export default BottomTabNavigator
