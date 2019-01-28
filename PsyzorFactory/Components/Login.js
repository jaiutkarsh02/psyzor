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

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:null,
        password:null
        
    };this.press=this.press.bind(this)

        //this.handleInputChange = this.handleInputChange.bind(this);
      }
    //   handleInputChange(event = {}) {
    //     const name = event.target && event.target.name;
    //     const value = event.target && event.target.value;
    //     this.setState({[name]: value});
    //   }
    press() {
        
            this.props.onLoginClick("login");
        
      }
    render() {
        const styles = StyleSheet.create({
            scroll: {
              backgroundColor: 'black',
              padding: 30,
              paddingTop:94,
              flexDirection: 'column'
          },
          
          label: {
              color: '#ff6600',
              fontSize: 20,
              textAlign:'left',
            
             
              

             
          },
          label1: {
            color: '#ff6600',
            fontSize: 20,
            textAlign:'right',
            
            
           
            

           
        },
          //ForgotPassword Link
          alignRight: {
              padding:0,
              alignSelf: 'flex-start',
             
          },
          alignRight1: {
            
            marginLeft:250,
           
            top:-55,
            right:0,
            
            alignSelf: 'flex-start',
           
        },

          // Username and Password Input
          textInput: {
              
             
            height: 50,
            fontSize: 25,
            
            backgroundColor:'#000',
            opacity:0.5
            
        },
        transparentButton: {
            marginTop: 30,
            borderColor: '#ff6600',
            borderWidth: 2
        },
        buttonBlueText: {
            color: '#ff6600'
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
            fontWeight:'bold'
        },
        buttonBlackText: {
            fontSize: 20,
            color: '#595856'
        },
        //for Psyzor TV
        buttonOrangeText: {
            fontSize: 34,
            
            color: '#FF6600',
            fontFamily:'Pacificio-Regular',
           marginLeft:80,
           
           
        },
        primaryButton: {
            backgroundColor: '#FF6600'
        },
        footer: {
           marginTop: 35
        }
        });
      return (
          <ScrollView style={styles.scroll}>

<Container>
<View>
            <Text style={[styles.buttonOrangeText]}>Psyzor TV </Text> 
        </View>
</Container>
<Container>
    <TextInput
        style={styles.textInput}
        placeholder="UserName"
        placeholderTextColor="#fff"
      
        onChangeText={(value) => this.setState({username: value})}
        value={this.state.username}
    />
</Container>
<Container>
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#fff"
        onChangeText={(value) => this.setState({password: value})}
        value={this.state.password}
    />
</Container>
<Container>
    <Button 
        label="Forgot Password?"
        styles={{button: styles.alignRight, label: styles.label}} 
        onPress={this.press.bind(this)} />
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
            label="Login"
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
    <Label text="Don't have an account?"/>
    <Button 
        label="Signup"
        styles={{button: styles.alignRight1, label: styles.label1}} 
        onPress={this.press.bind(this)} />
</Container>
          </ScrollView>
          
      );
    }
  }

