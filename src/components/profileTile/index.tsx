import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import styles from './styles';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ProfileProps {
  onPress?: () => void;
  textColor?: string;
  title: string;
  name: string;
  iconName: string;
}

const ProfileTile: React.FC<ProfileProps> = ({
  title,
  name,
  iconName,
  onPress,
}: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <Text>{title}</Text>
      <View
        style={styles.tileText}>
        <Text style={styles.padRight}>{name}</Text>
        <View>
          <Icon name={iconName} size={hp(2)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;
