import React, {Component} from 'react';
import {StatusBar, Platform, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import RootNavigation from './navigation/RootNavigation';
import Alert from './components/atoms/Alert';
import configureStore from './stores';
import {AppProvider, AppConsumer} from './AppContext';
import {colors} from './themes';
import CustomStatusBar from './components/atoms/CustomStatusBar';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const {store, persistor} = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CustomStatusBar backgroundColor={colors.primary} />
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <AppProvider {...this.props}>
              <AppConsumer>
                {funcs => {
                  global.props = {...funcs};
                  return (
                    <>
                      <RootNavigation {...funcs} />
                      <Alert />
                    </>
                  );
                }}
              </AppConsumer>
            </AppProvider>
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    );
  }
}
