import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Routes} from './src/routes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 24}}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Routes />
    </SafeAreaView>
  );
};

export default App;
