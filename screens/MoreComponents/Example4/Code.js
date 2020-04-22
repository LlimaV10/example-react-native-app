import * as React from 'react'
import {View, Text, Button, ScrollView} from "react-native";

const Code = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        <Text>{`
        <SectionList
            sections={[
              {title: 'A', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'B', data: ['Jackson', 'James']},
              {title: 'C', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Jackson', 'James']},
              {title: 'E', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'F', data: ['Jackson', 'James']},
            ]}
    
            renderItem={
              ({item}) =>
                <Text style={styles.item}>
                  {item}
                </Text>}
    
            renderSectionHeader={
              ({section}) =>
                <Text style={styles.sectionHeader}>
                  {section.title}
                </Text>}
    
            keyExtractor={(item, index) => index}
        />
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
