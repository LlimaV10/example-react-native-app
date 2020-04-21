import * as React from 'react';
import {DrawerContentScrollView, DrawerItemList, useIsDrawerOpen} from '@react-navigation/drawer';
import {Text, View, TextInput, AsyncStorage, Button, Keyboard} from "react-native";

const CustomDrawerContent = (props) => {
  const isDrawerOpen = useIsDrawerOpen();
  if (!isDrawerOpen) {
    Keyboard.dismiss()
  }

  const [name, setName] = React.useState("User");
  const [inputName, setInputName] = React.useState("");

  AsyncStorage.getItem("USERNAME", (error, result) => {
    if (result != null) {
      setName(result);
    }
  });

  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.text}>Using pure drawer items:</Text>
      <DrawerItemList {...props} />
      <View
        style={{
          borderBottomColor: '#cbcbcb',
          borderBottomWidth: 1,
          marginLeft: 18,
          marginTop: 18,
        }}
      />
      <Text style={styles.text}>Hello {name}</Text>
      <Text style={[styles.text, {marginTop: 9}]}>Set new name:</Text>
      <TextInput
        style={{
          borderWidth: .5,
          borderColor: '#cbcbcb',
          marginLeft: 18,
          marginRight: 18,
          marginBottom: 9,
          padding: 5,
        }}
        defaultValue={name}
        onChangeText={text => {
          setInputName(text)
        }}
      />
      <Button
        onPress={() => {
          AsyncStorage.setItem("USERNAME", inputName, () => {});
          setName(inputName);
        }}
        title="Save"
      />
    </DrawerContentScrollView>
  );
};

const styles = {
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 12,
    color: '#c3451d'
  }
};

export default CustomDrawerContent
