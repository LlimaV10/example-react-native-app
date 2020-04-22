import React, {useState} from 'react';
import {DrawerItemList, useIsDrawerOpen} from '@react-navigation/drawer';
import {Keyboard, ScrollView, Text, TextInput, View} from "react-native";
import {setUsername,} from "./../redux/Actions"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const CustomDrawerContent = (props) => {
  const isDrawerOpen = useIsDrawerOpen();
  if (!isDrawerOpen) {
    Keyboard.dismiss()
  }

  const [inputName, setInputName] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const {username} = props.account;
  const {setUsername} = props;
  return (
    <ScrollView>
      {
        !inputFocused &&
        <View>
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
        </View>
      }
      <Text style={styles.text}>Hello {username}</Text>
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
        defaultValue={username}
        onChangeText={text => {
          setInputName(text)
        }}
        onFocus={() => {
          setInputFocused(true)
        }}
        onEndEditing={() => {
          setInputFocused(false);
          if (inputName && inputName !== '') {
            setUsername(inputName)
          }
        }}
      />
    </ScrollView>
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

const mapStateToProps = ({ account }) => ({
  account
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setUsername
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent)
