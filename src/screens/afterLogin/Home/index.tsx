import {View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Home = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.drawerOpen}>
        <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
      </View>
      <View style={styles.drawerOpen}>
        <Button
          onPress={() => navigation.navigate('SelectNav')}
          title="Back to Home"
        />
      </View>
    </View>
  );
};

export default Home;
