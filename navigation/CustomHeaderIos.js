import * as React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import navItems from "../data/nav-items";

const STATUSBAR_HEIGHT = 20;

const CustomHeaderIos = ({ scene, navigation }) => {
  const {options} = scene.descriptor;
  const title = options.headerTitle;
  const routeIndex = options.index;

  return (
    <View style={styles.container}>
      <View style={styles.leftButtons} />
      <View style={styles.centerButtons}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightButtons}>
        {
          routeIndex < navItems.length - 1 &&
          <TouchableOpacity
              onPress={() => {
                navigation.navigate(navItems[routeIndex + 1].name)
              }}
              style={styles.touchableButton}
          >
            <Ionicons
                name='ios-arrow-forward'
                size={30}
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
    height: 40,
    width: 55,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  centerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightButtons: {
    height: 40,
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
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
};

export default CustomHeaderIos
