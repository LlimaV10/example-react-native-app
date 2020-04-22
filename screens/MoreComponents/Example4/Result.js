import React from 'react'
import {Button, SectionList, StyleSheet, Text, View} from "react-native";

const Result = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/*Example code ---------------------------*/}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Result
