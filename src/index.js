import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import store from './reduxData/store';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import Navigation from 'src/navigation';
import useStyle from 'src/hooks/useStyle';

const AppContainer = () => {
  const [Colors, Style] = useStyle();
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
        <Navigation />
        <Toast topOffset={100} />
      </SafeAreaView>
    </Provider>
  );
};

export default AppContainer;
