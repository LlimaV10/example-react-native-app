import * as React from 'react';
import {AsyncStorage, Button, Text, TextInput, View, TouchableWithoutFeedback, Keyboard} from "react-native";

const DismissKeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  )
};

const SettingsIos = () => {
  const [name, setName] = React.useState("User");
  const [inputName, setInputName] = React.useState("");

  AsyncStorage.getItem("USERNAME", (error, result) => {
    if (result != null) {
      setName(result);
    }
  });

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>Hello {name}</Text>
          <Text style={[styles.text, {marginTop: 9}]}>Set new name:</Text>
          <TextInput
            style={styles.input}
            defaultValue={name}
            onChangeText={text => {
              setInputName(text)
            }}
          />
        </View>
        <Button
          onPress={() => {
            AsyncStorage.setItem("USERNAME", inputName, () => {});
            setName(inputName);
          }}
          title="Save"
        />
      </View>
    </DismissKeyboard>
  )
};

const styles = {
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 12,
    color: '#000'
  },
  input: {
    borderWidth: .5,
    borderColor: '#cbcbcb',
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 24,
    padding: 5,
  },
};

export default SettingsIos
