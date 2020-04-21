import * as React from 'react'
import {Text, TouchableOpacity} from "react-native";
import navItemsAndroid from "../data/nav-items-android";
import Icon from "react-native-vector-icons/Ionicons";

const NextScreenButtonAndroid = ({navigation, route}) => {
  if (Platform.OS === 'ios') {
    return null
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(navItemsAndroid[route.params.screenIndex + 1].name)
      }}
    >
      <Text style={styles.buttonText}>Next screen</Text>
      <Icon
        name='md-arrow-forward'
        size={30}
        style={styles.arrow}
        color='white'
      />
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
  },
};

export default NextScreenButtonAndroid
