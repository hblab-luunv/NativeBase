import React, {Component} from 'react';
import Toast from 'react-native-simple-toast';
import Alert from './components/atoms/Alert';
import Loading from './components/Loading';

const AppContext = React.createContext({});

export const AppConsumer = AppContext.Consumer;

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  showLoading = () => this.setState({loading: true});
  hideLoading = () => this.setState({loading: false});

  alert = (title, message, buttons, onRequestClose) =>
    Alert.alert(title, message, buttons, onRequestClose);

  showToast = message => {
    if (message) {
      setTimeout(() => {
        Toast.show(message, Toast.LONG);
      }, 100);
    }
  };

  render() {
    const {loading} = this.state;
    const funcs = {
      showLoader: this.showLoading,
      hideLoader: this.hideLoading,
      alert: this.alert,
      showToast: this.showToast,
    };

    return (
      <AppContext.Provider value={{...funcs}}>
        {this.props.children}
        <Loading show={loading} />
      </AppContext.Provider>
    );
  }
}
