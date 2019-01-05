import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
 
import Login from './Components/Login';
import Signup from './Components/Signup';
import ForgotPassword from './Components/ForgotPassword';
import EditProfile from './Components/EditProfile';
import Notifications from './Components/Notifications';
import ManageScreen from './Components/ManageScreen';
import MySubscription from './Components/MySubscription';
import Presence from './Components/Presence';
import Recommendations from './Components/Recommendations';
export default class ReactNativeCommonScreens extends Component {
 
  render() {
    return (
      <Recommendations />

    );
  }
 
}
 
AppRegistry.registerComponent('ReactNativeCommonScreens', () => ReactNativeCommonScreens);