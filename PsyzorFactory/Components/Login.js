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
        password:null};
        //this.handleInputChange = this.handleInputChange.bind(this);
      }
    //   handleInputChange(event = {}) {
    //     const name = event.target && event.target.name;
    //     const value = event.target && event.target.value;
    //     this.setState({[name]: value});
    //   }
    press() {
        if(this.state.username=='nidhi'&& this.state.password=='test@123'){
            alert("login pressed")
        }
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
            <Text style={[styles.buttonOrangeText]}>Psyzor Factory </Text> 
        </View>
</Container>
<Container>
    <TextInput
        style={styles.textInput}
        placeholder="UserName"
        onChangeText={(value) => this.setState({username: value})}
        value={this.state.username}
    />
</Container>
<Container>
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="Password"
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
        styles={{button: styles.alignRight, label: styles.label}} 
        onPress={this.press.bind(this)} />
</Container>
          </ScrollView>
          
      );
    }
  }

