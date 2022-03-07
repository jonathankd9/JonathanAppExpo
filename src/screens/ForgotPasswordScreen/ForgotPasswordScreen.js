import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSendPressed = () => {
    // validate user
    navigation.navigate('NewPassword');
    console.warn('Confirmation Code Sent');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn')
    console.warn('Sign In')
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
          <Text style={styles.title} >Reset Your Password?</Text>

        <CustomInput placeholder="Enter your username" value={username} setValue={setUsername} />

        <CustomButton text="Send" onPress={onSendPressed} />
      
          <CustomButton
            text="Back to Sign In"
            type='SECONDARY'
            onPress={onSignInPressed}
          />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 20,
  },
  text: {
    color: 'grey',
    marginVertical: 10,

  },
  link: {
      color: 'blue',
  },
});

export default ForgotPasswordScreen;
