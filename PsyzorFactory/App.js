import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
 
import Login from './Components/Login';
import Signup from './Components/Signup';
import ForgotPassword from './Components/ForgotPassword';
import EditProfile from './Components/EditProfile';
import Notifications from './Components/Notifications';
import ManageStream from './Components/ManageStream';
import MySubscription from './Components/MySubscription';
import Presence from './Components/Presence';
import Recommendations from './Components/Recommendations';
import Enable from './Components/Enable';
import NotificationSettings from './Components/NotificationSettings';
import Social from './Components/Social';
import Streaming from './Components/Streaming';
import Settings from './Components/Settings';
import Account from './Components/Account';
import MainStream from './Components/MainStream';
export default class ReactNativeCommonScreens extends Component {
  
  render() {
  
    
    return (
      
      <ManageStream/>

    );
    }
  }
 

 
AppRegistry.registerComponent('ReactNativeCommonScreens', () => ReactNativeCommonScreens);
