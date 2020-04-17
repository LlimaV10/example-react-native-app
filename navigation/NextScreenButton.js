import * as React from 'react'
import {Text, TouchableOpacity} from "react-native";
import navItems from "../data/nav-items";

const NextScreenButton = ({navigation, route}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(navItems[route.params.screenIndex + 1].name)
      }}
    >
      <Text style={styles.buttonText}>Next screen</Text>
      <Text style={styles.arrow}>></Text>
    </TouchableOpacity>
  )
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 25,
    height: 64,
    paddingLeft: 25,
    paddingRight: 10,
    backgroundColor: '#ffae1f',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  arrow: {
    color: 'white',
    fontSize: 36,
    marginLeft: 24,
    marginBottom: 3
  },
};

export default NextScreenButton
