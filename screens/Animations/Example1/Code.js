import * as React from 'react'
import {View, Text, Button, ScrollView} from "react-native";

const Code = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{padding: 16}}>
        <Text>{`
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
          }, [navigation, fadeAnim, animatedValue]);
        
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
        `}</Text>
        <Text>{`
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
