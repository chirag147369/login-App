import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
const Setting = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{marginTop: '10%', width: '80%'}}>
        <Text style={{color: 'Black'}}>Welcome to Settings.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 42,
    width: '80%',
    borderBottomWidth: 1,
  },
});
export default Setting;
