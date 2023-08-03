import React, {useState} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppButton from '../../../components/appButton';
import ProfilePicture from '../../../components/profilePicture';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../../utils/colors';
import ImageOptionsModal from '../../../components/ImageOptionsModal';
import ProfileTile from '../../../components/profileTile';
import DatePicker from 'react-native-date-picker';
import navigationService from '../../../navigation/navigationService';
import Slider from '../../../components/slider';

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [img, setImg] = useState('https://placebear.com/640/360');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onImageReceived = (data: any) => {
    let allImageArr = [];
    for (let i = 0; i < data.length; i++) {
      const imageUri =
        Platform.OS === 'ios'
          ? data[i].path.replace('file://', '')
          : data[i].path;
      let imageName = data[i].path?.split('/')?.pop();

      const imageObj = {
        path: imageUri,
        imageName,
        size: data[i].size,
        type: data[i].mime,
      };
      const imageArr = [imageObj];
      allImageArr.push(...imageArr);
    }
    setImg(allImageArr[0].path);
    // dispatch(addOrderDetail({ images: allImageArr }));
  };

  return (
    <View style={styles.container}>
<!--       <Slider /> -->
      {/* this is for image picker section, and the preview of image with edit functionality */}
      <ImageOptionsModal
        visibility={visible}
        setVisibility={setVisible}
        onImageCaptured={onImageReceived}
        onImageSelected={onImageReceived}
      />
      {/* this is for display the selected image */}
      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => {
          setVisible(true);
        }}>
        <ProfilePicture url={{uri: img}} size={16} />
        <Icon name={'edit'} size={18} style={styles.iconStyle} />
      </TouchableOpacity>
      <View style={styles.marginV3}>
        <View style={styles.profileTitle}>
          <Text style={styles.titleText}>PERSONAL INFO</Text>
        </View>
        <View style={styles.marginH10}>
          {/* tile */}
          <ProfileTile title={'First Name'} name={'John'} iconName={'pencil'} />
          <View style={styles.seperator} />
          <ProfileTile title={'Last Name'} name={'Doe'} iconName={'pencil'} />
          <View style={styles.seperator} />
          <ProfileTile
            title={'DOB'}
            name={date.toDateString()}
            iconName={'calendar'}
            onPress={() => {
              setOpen(true);
            }}
          />
        </View>
        <View style={styles.profileTitle}>
          <Text style={styles.titleText}>ACCOUNT</Text>
        </View>
        <View style={styles.marginH10}>
          <ProfileTile
            title={'Email Address'}
            name={'email@address.com'}
            iconName={'pencil'}
          />
          <View style={styles.seperator} />
          <ProfileTile
            title={'Phone#'}
            name={'Add Phone Number'}
            iconName={'pencil'}
          />
          <View style={styles.seperator} />
          <ProfileTile
            title={'Password'}
            name={'Change Password'}
            iconName={'pencil'}
            textColor={Colors.primaryYellow}
            onPress={() => navigationService.navigate('ChangePass')}
          />
        </View>
        <View style={styles.seperator} />
      </View>
      {/* in the bottom it has submit/saveChanges button */}
      <View>
        <AppButton
          text={'SAVE CHANGES'}
          onPress={() => {
            console.log('the above changes');
          }}
          buttonStyle={styles.submitBtn}
          titleStyle={styles.btnTitle}
        />
      </View>
      <DatePicker
        mode="date"
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default Profile;
