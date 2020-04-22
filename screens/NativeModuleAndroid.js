import React from 'react'
import {View, StyleSheet, Button, NativeModules, ToastAndroid} from "react-native";
// import NextScreenButtonAndroid from "../navigation/NextScreenButtonAndroid";

const NativeModuleAndroid = props => {
  const {ToastExampleModule} = NativeModules;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            ToastExampleModule?.show('This is native Android toast', ToastExampleModule.SHORT)
          }}
          title='Make native Android toast'
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            ToastAndroid.show('This is react implemented toast', ToastAndroid.SHORT)
          }}
          title='Make react native toast'
        />
      </View>
      {/*<NextScreenButtonAndroid {...props} />*/}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 16,
  },
});

export default NativeModuleAndroid
