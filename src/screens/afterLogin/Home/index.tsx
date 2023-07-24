import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Home = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={{ height: 50, width: 200, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
      </View>
      <View style={{ height: 50, width: 200, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => navigation.navigate('SelectNav')}
          title="Back to Home"
        />
      </View>
    </View>
  );
};

export default Home;
