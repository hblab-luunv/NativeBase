import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import RootNavigator from './navigation/RootNavigator';
import configureStore from './stores';
  
const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle={'dark-content'} />
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
