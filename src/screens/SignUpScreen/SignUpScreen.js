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
// import SocialSignInButtons from '../../components/SocialSignInButtons';
// import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const {height} = useWindowDimensions();
//   const navigation = useNavigation();

//   const onSignInPressed = () => {
//     // validate user
//     navigation.navigate('Home');
//   };

    // const onSignInPressed = () => {
    //     console.warn('Sign In');
    // }
  const onForgotPasswordPressed = () => {
    console.warn('ForgotPassword');
  };

  const onRegisterPressed = () => {
    console.warn('Registered');
  };
  const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy');
  };
  const onTermsofUsePressed = () => {
    console.warn('Terms of Use');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
          <Text style={styles.title} >Create an account</Text>


        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
         <CustomInput
          placeholder="Email"
          value={setEmail}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style ={styles.text} >By registering, you confirm that you agree with our <Text style={styles.link} onPress={onTermsofUsePressed} >Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>

        <SocialSignInButtons/>

        <CustomButton
          text="Have an account? Sign in"
        //   onPress={onSignUpPressed}
          type="TERTIARY"
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

export default SignUpScreen;
