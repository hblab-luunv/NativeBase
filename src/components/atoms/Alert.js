import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-translucent-modal';
import {scaleSize} from '../../themes/mixins';
import {colors, metrics, fonts, images} from '../../themes/index';
import Icon from './Icon';

const CENTERED_VIEW_PADDING = metrics.baseMargin;
const MODAL_VIEW_PADDING = metrics.tripleSmallMargin;

class Alert extends React.PureComponent {
  static instance;

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      message: '',
      buttons: [],
      onRequestClose: () => {},
    };

    if (!Alert.instance) {
      Alert.instance = this;
    }
  }

  static alert(
    title,
    message,
    buttons = [
      {
        text: 'OK',
        style: 'ok',
      },
    ],
    onRequestClose = () => {},
  ) {
    if (Alert.instance) {
      Alert.instance._alert(title, message, buttons, onRequestClose);
    }
  }

  _alert(title, message, buttons, onRequestClose) {
    this.setState({
      title,
      message,
      show: true,
      buttons,
      onRequestClose,
    });
  }

  resetState() {
    this.setState({
      show: false,
      title: '',
      message: '',
      buttons: [],
      onRequestClose: () => {},
    });
  }

  hide() {
    this.resetState();
  }

  getButtonStyle(style) {
    let buttonStyle = {};
    let textStyle = {};

    switch (style) {
      case 'ok':
        buttonStyle = styles.okContainer;
        textStyle = styles.okText;
        break;
      case 'cancel':
        buttonStyle = styles.cancelContainer;
        textStyle = styles.cancelText;
        break;
      default:
        buttonStyle = styles.normalContainer;
        textStyle = styles.normalText;
        break;
    }

    return [buttonStyle, textStyle];
  }

  render() {
    const {show, title, message, buttons, onRequestClose} = this.state;
    const buttonElements = buttons.map((button, index) => {
      const text = button.text || '';
      const style = button.style || 'ok';
      const [buttonStyle, textStyle] = this.getButtonStyle(style);
      const newButtonStyle = {
        ...styles.button,
        ...buttonStyle,
        width:
          (metrics.screenWidth -
            2 * (CENTERED_VIEW_PADDING + MODAL_VIEW_PADDING)) /
          buttons.length,
      };
      const onPress = button.onPress || (() => {});

      return (
        <TouchableOpacity
          key={index}
          style={newButtonStyle}
          onPress={() => {
            onPress();
            this.hide();
          }}>
          <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
      );
    });

    return (
      <Modal
        transparent={true}
        visible={show}
        onRequestClose={() => {}}
        statusBarTranslucent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.row}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity
                style={styles.closeButtonContainer}
                onPress={() => {
                  onRequestClose();
                  this.hide();
                }}>
                <Icon
                  source={images.icClose}
                  width={scaleSize(32)}
                  height={scaleSize(32)}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.message}>{message}</Text>
            <View style={styles.buttonContainer}>{buttonElements}</View>
          </View>
        </View>
      </Modal>
    );
  }
}
export default Alert;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.windowTint,
    padding: CENTERED_VIEW_PADDING,
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: metrics.tripleSmallRadius,
    padding: MODAL_VIEW_PADDING,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginTop: -metrics.smallMargin,
  },
  title: {
    color: colors.black,
    ...fonts.style.button1,
    flex: 1,
    marginTop: metrics.smallMargin,
  },
  message: {
    color: colors.grey05,
    ...fonts.style.p2,
    marginTop: metrics.tripleSmallMargin,
  },
  closeButtonContainer: {
    paddingLeft: metrics.baseMargin,
  },
  buttonContainer: {
    marginTop: metrics.tripleSmallMargin,
    flexDirection: 'row',
    height: scaleSize(44),
  },
  button: {
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleSize(44),
  },
  okContainer: {
    backgroundColor: colors.danger500,
  },
  okText: {
    ...fonts.style.p2,
    color: colors.white,
  },
  cancelContainer: {
    backgroundColor: colors.white,
  },
  cancelText: {
    ...fonts.style.p2,
    color: colors.black,
  },
  normalContainer: {
    backgroundColor: colors.white,
  },
  normalText: {
    ...fonts.style.p2,
    color: colors.primary500,
  },
});
