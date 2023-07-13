import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/navigation/navigator';

const App = () => {
  return (
      <SafeAreaView>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <View style={styles.container}>
          <Navigator />
        </View>
      </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
});
