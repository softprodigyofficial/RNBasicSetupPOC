import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import styles from './style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface ProfileProps {
  url: any;
  size: number;
}

const ProfilePicture = (props: ProfileProps) => {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return (
    <View
      style={[
        styles.container,
        {height: hp(props?.size), width: hp(props?.size)},
      ]}>
      {loader && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'center',
            alignItems: 'center',
          }}/>
      )}
      <Image
        source={props?.url}
        //borderRadius will help to make Round Shape
        style={[
          styles.image,
          {height: hp(props?.size - 1), width: hp(props?.size - 1)},
        ]}
        onLoadEnd={() => {
          setLoader(false);
        }}
      />
    </View>
  );
};

export default ProfilePicture;
