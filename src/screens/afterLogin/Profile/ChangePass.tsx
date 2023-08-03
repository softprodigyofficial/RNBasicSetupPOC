import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppInput from '../../../components/textInput';
import AppButton from '../../../components/appButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Octicons';
import {Colors} from '../../../utils/colors';

const ChangePass = () => {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [newConfirm, setNewConfirm] = useState('');

  const handleCurrent = (text: string) => {
    setCurrent(text);
  };
  const handleNew = (text: string) => {
    setNewPass(text);
  };
  const handleNewConfirm = (text: string) => {
    setNewConfirm(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Icon name="info" size={hp(2)} style={styles.icon} />
        <Text>
          Password must contain a minimum of 8 characters, at least 1 letter, 1
          number, and 1 special character (!,@,#,$,%,^,&,*).
        </Text>
      </View>
      <View style={styles.input}>
        <AppInput
          value={current}
          onChangeText={handleCurrent}
          error={undefined}
          onBlur={(): void => {}}
          keyboardType={undefined}
          placeholder={'Current Password'}
          secureTextEntry={false}
          maxLength={30}
        />
        <AppInput
          value={newPass}
          onChangeText={handleNew}
          error={undefined}
          onBlur={(): void => {}}
          keyboardType={undefined}
          placeholder={'New Password'}
          secureTextEntry={false}
          maxLength={30}
        />
        <AppInput
          value={newConfirm}
          onChangeText={handleNewConfirm}
          error={undefined}
          onBlur={(): void => {}}
          keyboardType={undefined}
          placeholder={'Confirm New Password'}
          secureTextEntry={false}
          maxLength={30}
        />
      </View>
      <View>
        <AppButton
          text={'SAVE CHANGES'}
          onPress={() => {
            console.log('the above changes');
          }}
          buttonStyle={styles.subBtn}
          titleStyle={styles.subTxt}
        />
      </View>
    </View>
  );
};

export default ChangePass;

const styles = StyleSheet.create({
  container: {flex: 1},
  info: {
    flexDirection: 'row',
    marginTop: hp(3),
    marginHorizontal: wp(1),
  },
  icon: {margin: wp(1)},
  input: {marginHorizontal: hp(5), marginVertical: wp(6)},
  subBtn: {backgroundColor: Colors.primaryYellow, width: wp(80)},
  subTxt: {fontWeight: 'bold', color: Colors.black},
});
