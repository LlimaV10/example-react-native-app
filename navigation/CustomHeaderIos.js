import * as React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import navItemsIos from "../data/nav-items-ios";

const STATUSBAR_HEIGHT = 20;

const CustomHeaderIos = ({ scene, navigation }) => {
  const {options} = scene.descriptor;
  const title = options.headerTitle;
  const routeIndex = options.index;

  return (
    <View style={styles.container}>
      <View style={styles.leftButtons}>
        {
          routeIndex > navItemsIos.length - 2 &&
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navItemsIos[0].name)
            }}
            style={styles.touchableButton}
          >
            <Ionicons
              name='ios-arrow-back'
              size={20}
              style={styles.icon}
              color='black'
            />
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        }
      </View>
      <View style={styles.centerButtons}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightButtons}>
        {
          routeIndex < navItemsIos.length - 2 &&
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navItemsIos[routeIndex + 1].name)
            }}
            style={styles.touchableButton}
          >
            <Text style={styles.buttonText}>Next</Text>
            <Ionicons
              name='ios-arrow-forward'
              size={20}
              style={styles.icon}
              color='black'
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: .5,
  },
  leftButtons: {
    height: '100%',
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  centerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightButtons: {
    height: '100%',
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  touchableButton: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#39d8ff',
  },
  icon: {
    padding: 10,
    marginTop: 3,
    color: '#39d8ff'
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
};

export default CustomHeaderIos
