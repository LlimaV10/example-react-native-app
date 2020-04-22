import React from 'react'
import {Button, Image, ScrollView, View} from "react-native";

const Logo = ({size}) => {
  return (
    <Image
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: size,
        height: size
      }}
    />
  )
};

const Result = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/*Example code ---------------------------*/}
      <ScrollView style={{padding: 16}}>
        <Logo size={10}/>
        <Logo size={20}/>
        <Logo size={30}/>
        <Logo size={40}/>
        <Logo size={50}/>
        <Logo size={60}/>
        <Logo size={70}/>
        <Logo size={80}/>
        <Logo size={90}/>
        <Logo size={100}/>
        <Logo size={110}/>
        <Logo size={120}/>
        <Logo size={130}/>
        <Logo size={140}/>
        <Logo size={150}/>
        <Logo size={160}/>
        <Logo size={170}/>
        <Logo size={180}/>
        <Logo size={190}/>
        <Logo size={200}/>
      </ScrollView>
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
