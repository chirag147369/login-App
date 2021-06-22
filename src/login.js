import * as Animatable from 'react-native-animatable';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {AuthContext} from '../component/context';

const Login = props => {
  const [email, onChangeemail] = React.useState('');
  const [password, onChangepassword] = React.useState('');
  const [emailErr, setEmailErr] = React.useState('');
  const [passwordErr, setPasswordErr] = React.useState('');
  const validateField = () => {
    if (email == '') {
      return false;
    } else if (password == '') {
      return false;
    } else {
      return true;
    }
  };

  const handleClick = () => {
    console.log('validate field', validateField());
    if (validateField()) {
      if (checkEmail(email) && checkPassword(password)) {
        console.log(email + ' ' + password);
        props.navigation.navigate('Home', {
          itemId: 86,
          otherParam: 'anything you want here',
        });
      } else {
        if (checkEmail(email)) {
          setEmailErr('');
        } else {
          setEmailErr('Please enter a valid email');
        }
        if (checkPassword(password)) {
          setPasswordErr('');
        } else {
          setPasswordErr('Please enter a valid password');
        }
      }
    } else {
      alert('please enter email and pass first');
    }
  };

  const checkEmail = value => {
    console.log('email value ' + value);
    const emailRegX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const val = emailRegX.test(value);
    return val;
  };

  const checkPassword = value => {
    const passRegX = /^([a-zA-Z0-9!@#$%^&*,_+]{6,50})$/;
    console.log('pass :- ', passRegX.test(value));
    return passRegX.test(value);
  };
  const {signIn} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        style={styles.input}
        onChangeText={value => {
          onChangeemail(value);
        }}
        value={email}
        placeholder="User Name"
      />
      <Text style={{color: 'red'}}>{emailErr}</Text>
      <TextInput
        style={styles.input1}
        onChangeText={value => onChangepassword(value)}
        value={password}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Animatable.Text animation="slideInLeft">
        <Text style={{color: 'red'}}>{passwordErr}</Text>
      </Animatable.Text>
      <View style={{marginTop: '10%', width: '80%'}}>
        {/* <TouchableOpacity style={styles.input2} onPress={() => handleClick()}> */}
        <TouchableOpacity
          style={styles.input2}
          onPress={() => signIn(email, password)}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
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
  input1: {
    height: 42,
    width: '80%',
    borderBottomWidth: 1,
    marginTop: '5%',
  },
  input2: {
    borderWidth: 1,
    height: 42,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    textAlign: 'center',
  },
  screen: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
