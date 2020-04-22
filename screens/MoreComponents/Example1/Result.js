import React, {useState} from 'react'
import {Button, ScrollView, Text, TextInput, View} from "react-native";

const Result = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        {/*Example code ---------------------------*/}
        <View style={{padding: 10}}>
          <Text style={{marginBottom: 10}}>
            Replacing each word with pizza:
          </Text>
          <TextInput
            style={{height: 40, backgroundColor: 'white'}}
            placeholder="Type here to translate!"
            onChangeText={text => setText(text)}
            defaultValue={text}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
        {/*Example code ---------------------------*/}
      </ScrollView>
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
