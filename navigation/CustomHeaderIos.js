import * as React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import navItemsIos from "../data/nav-items-ios";
import Icon from "react-native-vector-icons/Ionicons";

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
            <Icon
              name='ios-arrow-back'
              size={35}
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
            <Icon
              name='ios-arrow-forward'
              size={35}
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
    height: 60 + STATUSBAR_HEIGHT,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: '#d7d7d7',
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
    fontSize: 18,
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
  }
};

export default CustomHeaderIos
