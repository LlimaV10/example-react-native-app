import * as React from 'react';
import {NativeModules, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {DrawerActions} from "@react-navigation/native";
import navItems from "../data/nav-items";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const CustomHeader = ({ scene, navigation }) => {
  const {options} = scene.descriptor;
  const title = options.headerTitle;
  const routeIndex = options.index;

  return (
    <View style={styles.container}>
      {
        routeIndex === 0 &&
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer())
          }}
          style={styles.touchableButton}
        >
          <Ionicons
            name='md-menu'
            size={30}
            style={styles.icon}
            color='white'
          />
        </TouchableOpacity>
      }
      {
        routeIndex !== 0 &&
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={styles.touchableButton}
        >
          <Ionicons
            name='md-arrow-back'
            size={30}
            style={styles.icon}
            color='white'
          />
        </TouchableOpacity>
      }
      <Text style={styles.title}>{title}</Text>
      {
        routeIndex !== 0 &&
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(navItems[0].name)
          }}
          style={[
            styles.touchableButton,
            styles.touchableRightButton
          ]}
        >
          <Ionicons
            name='md-close'
            size={30}
            style={styles.icon}
            color='white'
          />
        </TouchableOpacity>
      }
    </View>
  )
};

const styles = {
  container: {
    height: 65 + STATUSBAR_HEIGHT,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: '#f4511e',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  touchableButton: {
    height: '100%',
    justifyContent: 'center',
  },
  touchableRightButton: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  icon: {
    marginLeft: 18,
    height: 25,
    width: 35,
    marginBottom: 3,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 18,
  }
};

export default CustomHeader
