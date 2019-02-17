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
        this.state={
        password:null,
        confirm_password:null,
    email:null};
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
               paddingTop:105,
              //flexDirection: 'column'
          },
          label: {
              color: '#ff6600',
              fontSize: 20
          },
          alignRight: {
            padding:0,
            alignSelf: 'flex-start',
             marginLeft:30,
             marginTop:-5
          },
          textInput: {
              
            fontSize: 20,
            
            backgroundColor:'#000',
            opacity:0.5,
            borderColor:'#ff6600',
            borderBottomWidth:1,marginLeft:30,
            marginRight:30
           
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
            fontWeight:'bold',
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
            marginLeft:30,
            marginRight:30,
            marginTop:-10
        },
        footer: {
           marginTop: 35
        }
        });
      return (
       
   
          <ScrollView style={styles.scroll}>
<Container>
    <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor="#fff"
        onChangeText={(value) => this.setState({username: value})}
        value={this.state.username}
    />
</Container>
<Container>
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="New Password"
        placeholderTextColor="#fff"
        onChangeText={(value) => this.setState({password: value})}
        value={this.state.password}
    />
</Container>
<Container>
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="Confirm Password"
        placeholderTextColor="#fff"
        onChangeText={(value) => this.setState({confirm_password: value})}
        value={this.state.confirm_password}
    />
</Container>
{/* <Container>
    <Button 
        styles={{button: styles.transparentButton}}
        onPress={this.press.bind(this)}
    >
        <View style={styles.inline}>
            <Icon name="facebook-official" size={30} color="#3B5699" />
            <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text> 
            <Text style={styles.buttonBlueText}>with Facebook</Text>
        </View>
    </Button>
</Container> */}
<View style={styles.footer}>
    <Container>
        <Button 
            label="Done"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
            onPress={this.press.bind(this)} />
    </Container>
    {/* <Container>
        <Button 
            label="CANCEL"
            styles={{label: styles.buttonBlackText}} 
            onPress={this.press.bind(this)} />
    </Container> */}
</View>
<Container>
    
    <Button 
        label="Back to Login?"
        styles={{button: styles.alignRight, label: styles.label}} 
        onPress={this.press.bind(this)} />
</Container>

          </ScrollView>
          
      );
    }
  }

