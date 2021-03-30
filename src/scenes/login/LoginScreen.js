import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Input, Icon, Button, Text} from '@ui-kitten/components';
import SizedBox from '../../components/atoms/SizedBox';
import SocialButton from '../../components/molecules/SocialButton';
import images from '../../themes/images';

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const LoginScreen = () => {
  const [value, setValue] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleClick = () => {
    console.log('Click');
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.content}>
          <SizedBox height={100} />
          <Text style={styles.text} category="h2">
            LOGIN
          </Text>
          <SizedBox height={100} />
          <Input
            label="User name"
            status="primary"
            style={styles.input}
            value={value}
            placeholder="User name"
            onChangeText={nextValue => setValue(nextValue)}
            size="large"
            selectionColor={'black'}
          />
          <SizedBox height={20} />
          <Input
            value={password}
            label="Password"
            placeholder="Password"
            caption="Should contain at least 8 symbols"
            accessoryRight={renderIcon}
            captionIcon={AlertIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
            size="large"
          />
          <SizedBox height={50} />
          <Button onPress={handleClick} style={styles.loginButton}>
            Login
          </Button>
          <SizedBox height={30} />
          <View style={styles.social}>
            <SocialButton imageSrc={images.icFb} />
            <SizedBox width={30} />
            <SocialButton imageSrc={images.icGg} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  container: {
    padding: 16,
  },
  input: {
    borderColor: '#ccc',
  },
  loginButton: {
    alignSelf: 'stretch',
  },
  social: {
    flexDirection: 'row',
  },
});

export default LoginScreen;
