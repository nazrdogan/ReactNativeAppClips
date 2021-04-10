import React, {useState, useEffect} from 'react';
import {AppRegistry, Button, View, Text} from 'react-native';
import {NativeModules} from 'react-native';

const AppClip = () => {
  const [url, setURL] = useState('');
  const {AppClipLinkingManager} = NativeModules;
  useEffect(() => {
    AppClipLinkingManager.getInitialLink().then((link) => {
      setURL(link);
    });
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 22}}>React Native App Clip {url}</Text>
      <Button title="Learn More" color="#841584" />
    </View>
  );
};

AppRegistry.registerComponent('AppClip', () => AppClip);
