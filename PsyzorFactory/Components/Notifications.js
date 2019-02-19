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
            flexDirection: 'column',
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
            right:0,
            top:-55,
            alignSelf: 'flex-end',
            marginRight:0
        },
        footer: {
            alignSelf: 'flex-end',
            marginLeft:80,
            marginTop:600
            
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
          <Header >
              <Container>
              <View>
            <Text style={[styles.buttonText]}>Notifications</Text> 
            </View>
              </Container>
          </Header>
          <View>
            <Text style={[styles.footer]}>Notifications</Text> 
            </View>

<Footer>

</Footer>

          </ScrollView>
          
      );
    }
  }

