import React, {useRef} from 'react'
import {Animated, Button, ScrollView, Text, View} from "react-native";

const FadeInView = ({navigation, style, children}) => {
  let animatedValue = new Animated.Value(0);
  const fadeAnim = useRef(animatedValue).current;

  React.useEffect(() => {
    return navigation.addListener('focus', () => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 3000,
        }
      ).start();
    });
  }, [navigation, fadeAnim]);

  React.useEffect(() => {
    return navigation.addListener('blur', () => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 500,
        }
      ).start();
    });
  }, [navigation, fadeAnim]);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};

const Result = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        {/*Example code ---------------------------*/}
        <Text>Fading in when screen was focused</Text>
        <Text>Fading out when screen blurring</Text>
        <FadeInView
          navigation={navigation}
          style={{
            width: 250,
            height: 50,
            backgroundColor: 'powderblue'
          }}
        >
          <Text
            style={{
              fontSize: 28,
              textAlign: 'center',
              margin: 10
            }}
          >
            Fading in
          </Text>
        </FadeInView>
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
