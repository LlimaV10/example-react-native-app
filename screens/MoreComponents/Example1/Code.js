import * as React from 'react'
import {View, Text, Button, ScrollView} from "react-native";

const Code = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        <Text>{`
        const [text, setText] = useState('');
        `}</Text>
        <Text>{`
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
