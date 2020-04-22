import * as React from 'react'
import {Button, View} from "react-native";

const Result = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/*Example code ---------------------------*/}
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue'
        }} />
        <View style={{
          height: 50,
          backgroundColor: 'skyblue'
        }} />
        <View style={{
          height: 100,
          backgroundColor: 'steelblue'
        }} />
      </View>
      {/*Example code ---------------------------*/}
      <Button
        onPress={() => {
          navigation.navigate('Code')
        }}
        title='Watch code'
      />
    </View>
  )
};

export default Result
