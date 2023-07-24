import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  error: any;
  onBlur: () => void;
  keyboardType: any;
  placeholder: string;
  secureTextEntry: any;
  maxLength: number;
}

const AppInput: React.FC<Props> = ({
  value,
  onChangeText,
  error,
  onBlur,
  keyboardType,
  placeholder,
  secureTextEntry,
  maxLength,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={[styles.input, error && styles.errorInput]}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        maxLength={maxLength}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={togglePasswordVisibility}>
          <Icon
            name={isPasswordVisible ? 'eye' : 'eye-with-line'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default AppInput;
