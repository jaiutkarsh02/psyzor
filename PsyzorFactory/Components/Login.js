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
        
    };
   // this.press=this.press.bind(this)

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

         userIcon:{
             flexDirection:'row',
             flex:1,
             justifyContent:'space-between',
             top:35,
             marginLeft:35



         },
        buttonOrangeText: {
           marginTop:70,
           marginBottom:40,
            fontSize: 30,
            
            
            color: '#FF6600',
            fontFamily:'Pacificio-Regular',

          marginLeft:110,
           
           
        },
  
          //ForgotPassword Link
          alignRight: {
              padding:0,
             alignSelf: 'flex-start',
              marginLeft:30,
              marginTop:30
             

          },
          alignRight1: {
          marginTop:-20,
          marginLeft:-90,
           
           
        },

          // Username and Password Input
          textInput: {
              
             
           height: 50,
            fontSize: 20,
            
            backgroundColor:'#000',
            opacity:0.5,
            borderColor:'#ff6600',
            borderWidth:1,marginLeft:30,
           marginRight:30,
           paddingLeft:40
           

            
        },
        textInput1:{
            color:"#fff",
            marginLeft:30,
            marginRight:150,
            fontSize:20

        },
        transparentButton: {
            flexDirection:'row',
            borderColor: '#ff6600',
            borderWidth:2,
            marginLeft:120,
            marginRight:120
            
        },
        transparentButton1: {
            flexDirection:'row',
            borderColor: '#fff',
            borderWidth:2,
            marginLeft:170,
            marginRight:120
            
        },
        buttonBlueText: {
            color: '#fff',
            fontSize:20,
            borderWidth:2,
            borderColor:'#ff6600',
            marginLeft:0
        },
        buttonBlueText1: {
            color: '#fff',
            fontSize:20,
            borderWidth:2,
            borderColor:'#ff6600',
           
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
          //  fontSize: 20,
            color: '#595856'
        },
        //for Psyzor TV
        
        primaryButton: {
            backgroundColor: '#FF6600',
            marginLeft:30,
            marginRight:30,
            marginTop:-40,
            borderRadius:40
            
        },
        footer: {
           marginTop: 35
        }
        });
      return (
          <ScrollView style={styles.scroll}>

<Container>
<View><Text style={[styles.buttonOrangeText]}>Psyzor TV</Text> 
            </View>
       
</Container>

<Container style={styles.userIcon}>
<Icon name="rocket" size={20} color="#900" style={styles.userIcon}/>
    <TextInput
        style={styles.textInput}
        placeholder="UserName"
        placeholderTextColor="#fff"
      
        onChangeText={(value) => this.setState({username: value})}
        value={this.state.username}/>
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

{/* <View flexDirection="row">
    <Button 
        styles={{button: styles.transparentButton1
        
        }}
        onPress={this.press.bind(this)}
    >
        <View style={styles.inline}>
            <Icon name="facebook-official" size={30} color="#3B5699" />
            <Text style={[styles.buttonBlueText1]}>Facebook</Text> 
            
        </View>
        
    </Button>
   
    </View> */}
<View style={styles.footer}>
    <Container>
        <Button 
            label="Login"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
            onPress={this.press.bind(this)}/>
    </Container>
   
</View>
<View flexDirection="row">
<View>
            <Text style={[styles.textInput1]}>Don't have an account? </Text> 
            </View>
    <Button 
        label="Signup"
        
        styles={{button: styles.alignRight1, label: styles.label1}} 
        onPress={this.press.bind(this)} />
      
</View>
          </ScrollView>
          
      );
    }
  }


