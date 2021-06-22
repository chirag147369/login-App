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

const Home = props => {
  console.log('props 1 ', props);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{marginTop: '10%', width: '80%'}}>
        <Text style={{color: 'Black'}}>Welcome to home</Text>
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

export default Home;
