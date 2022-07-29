import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Home} from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 24}}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Home />
    </SafeAreaView>
  );
};

export default App;
