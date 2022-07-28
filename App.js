import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Login} from './src/screens/Login';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 24}}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Login />
    </SafeAreaView>
  );
};

export default App;
