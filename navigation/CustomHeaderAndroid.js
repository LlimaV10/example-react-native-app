import * as React from 'react';
import {NativeModules, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {DrawerActions} from "@react-navigation/native";
import navItemsAndroid from "../data/nav-items-android";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const CustomHeaderAndroid = ({ scene, navigation }) => {
  const {options} = scene.descriptor;
  const title = options.headerTitle;
  const routeIndex = options.index;

  return (
    <View style={styles.container}>
      <View style={styles.leftButtons}>
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
      </View>
      <View style={styles.centerButtons}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightButtons}>
        {
          routeIndex !== 0 &&
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navItemsAndroid[0].name)
            }}
            style={styles.touchableButton}
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
    </View>
  )
};

const styles = {
  container: {
    height: 65 + STATUSBAR_HEIGHT,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: '#f4511e',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftButtons: {
    height: '100%',
    width: 55,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  centerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightButtons: {
    height: '100%',
    width: 55,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  touchableButton: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 18,
  }
};

export default CustomHeaderAndroid
