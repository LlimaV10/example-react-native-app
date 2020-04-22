import * as React from 'react'
import {View, Text, Button, ScrollView} from "react-native";

const Code = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        <Text>{"const Logo = ({size}) => {\n" +
        "  return (\n" +
        "    <Image\n" +
        "      source={{\n" +
        "        uri: 'https://reactnative.dev/img/tiny_logo.png',\n" +
        "        width: size,\n" +
        "        height: size\n" +
        "      }}\n" +
        "    />\n" +
        "  )\n" +
        "};"}</Text>
        <Text>{`
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
        `}</Text>
      </ScrollView>
      <Button
        onPress={() => {
          navigation.navigate('Result')
        }}
        title='Watch result'
      />
    </View>
  )
};

export default Code
