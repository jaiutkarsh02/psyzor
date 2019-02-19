import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
 
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../Components/Container';
import Button from '../Components/Button';
import Label from '../Components/Label';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
export default class Login extends Component {
    constructor(props) {
        super(props);
        //this.handleInputChange = this.handleInputChange.bind(this);
      }
    //   handleInputChange(event = {}) {
    //     const name = event.target && event.target.name;
    //     const value = event.target && event.target.value;
    //     this.setState({[name]: value});
    //   }
    press() {
        alert('Password Reset')
      }
    render() {
        const styles = StyleSheet.create({
            scroll: {
              backgroundColor: 'black',
            //   padding: 30,
            //   paddingTop:94,
            flexDirection: 'column'
          },
          label: {
              color: '#0d8898',
              fontSize: 20
          },
          alignRight: {
              alignSelf: 'flex-start'
          },
          textInput: {
            height: 50,
            fontSize: 30,
            backgroundColor: '#FFF'
        },
        transparentButton: {
            marginTop: 30,
            borderColor: '#3B5699',
            borderWidth: 2
        },
        buttonBlueText: {
            fontSize: 20,
            color: '#3B5699'
        },
        buttonBigText: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        inline: {
            flexDirection: 'row'
        },
        buttonWhiteText: {
            fontSize: 20,
            color: '#FFF',
            top:12,
            fontWeight:"bold"
        },
        buttonWhiteText1: {
            fontSize: 20,
            color: '#FFF'
        },
        buttonBlackText: {
            fontSize: 20,
            color: '#595856'
        },
        buttonOrangeText: {
            fontSize: 34,
            fontFamily:'Lucida Calligraphy',
            color: '#FF6600'
        },
        primaryButton: {
            backgroundColor: '#FF6600',
            height:50,
            right:0,
            top:-45,
            alignSelf: 'flex-end',
            marginRight:0
        },
        primaryButton1: {
            backgroundColor: '#000',
            opacity:0.5
           // height:50
        },
        footer: {
      
          borderColor:"#ff6600",
            borderWidth:1,
            height:52
        },
        buttonText:
        {

            marginLeft:10,
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
            top:10
           
          
        },
        });
      return (
       
   
          <ScrollView style={styles.scroll}>
          <Header>
              <Container flexDirection="row">
              <View>
            <Text style={[styles.buttonText]}>Notification Settings</Text> 
            </View>
                  <Button 
            label="Done"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
            onPress={this.press.bind(this)} />
              </Container>
          </Header>

    <Container>
        <Label text="Manage how you receive notifications" />
    </Container>

<View style={styles.footer}>
    <Container>
        <Button 
           
           label="Send me in-app notifications"

            styles={{button: styles.primaryButton1, label: styles.buttonWhiteText1}} 
            onPress={this.press.bind(this)} />
    </Container>
</View>



          </ScrollView>
          
      );
    }
  }

