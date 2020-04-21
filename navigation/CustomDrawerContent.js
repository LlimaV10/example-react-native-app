import * as React from 'react';
import {DrawerContentScrollView, DrawerItemList, useIsDrawerOpen} from '@react-navigation/drawer';
import {Button, Keyboard, Text, TextInput, View, ScrollView} from "react-native";
import {setUsername,} from "./../redux/Actions"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const CustomDrawerContent = (props) => {
  const isDrawerOpen = useIsDrawerOpen();
  if (!isDrawerOpen) {
    Keyboard.dismiss()
  }

  const [inputName, setInputName] = React.useState("");

  const {username} = props.account;
  const {setUsername} = props;
  return (
    <ScrollView>
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
      />
      <Button
        onPress={() => {
          if (inputName && inputName !== '') {
            setUsername(inputName)
          }
        }}
        title="Save"
      />
      <View
        style={{
          borderBottomColor: '#cbcbcb',
          borderBottomWidth: 1,
          marginLeft: 18,
          marginTop: 18,
        }}
      />
      <Text style={styles.text}>Using pure drawer items:</Text>
      <DrawerItemList {...props} />
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
