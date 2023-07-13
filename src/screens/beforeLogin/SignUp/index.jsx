import {Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [email, onChangeEmail] = useState('');
  const [pass, onChangePass] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.signText}>Sign Up</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="First Name"
          onChangeText={text => onChangePass(text)}
          value={pass}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Last Name"
          onChangeText={text => onChangePass(text)}
          value={pass}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          onChangeText={text => onChangeEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          onChangeText={text => onChangePass(text)}
          value={pass}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Confirm Password"
          onChangeText={text => onChangePass(text)}
          value={pass}
        />
        <View>
          <Button title="Submit" />
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginOpt}
        onPress={() => navigation.navigate('Login')}>
        <Text>Already have account, Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
