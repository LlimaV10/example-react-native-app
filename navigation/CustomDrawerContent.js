import * as React from 'react';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {Text} from "react-native";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.text}>Using pure drawer items:</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = {
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 12,
    color: '#c3451d'
  }
};

export default CustomDrawerContent
