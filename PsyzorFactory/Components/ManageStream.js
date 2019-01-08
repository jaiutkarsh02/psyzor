import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
 
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from './Container';
import Button from './Button';
import Label from './Label';
import Header from './Header';
import Footer from './Footer';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
        title:null,
        go_live_notification:null,
    category:null};
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
              backgroundColor: 'black'
            //   padding: 30,
            //   paddingTop:94,
              //flexDirection: 'column'
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
            backgroundColor: 'brown'
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
          <Header>
              <Label text="Manage Stream" />
          </Header>
          <Label text="Broadcast Info" />
<Container>
    <Label text="Title" />
    <TextInput
        style={styles.textInput}
        onChangeText={(value) => this.setState({title: value})}
        value={this.state.title}
    />
</Container>
<Container>
    <Label text="Go Live Notification" />
    <TextInput
        style={styles.textInput}
        onChangeText={(value) => this.setState({go_live_notification: value})}
        value={this.state.go_live_notification}
    />
</Container>
<Container>
<Label text="Category" />
    <TextInput
        style={styles.textInput}
        onChangeText={(value) => this.setState({category: value})}
        value={this.state.category}
    />
</Container>

<View style={styles.footer}>
    <Container>
        <Button 
            label="Save"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
            onPress={this.press.bind(this)} />
    </Container>
</View>
<View style={styles.footer}>
    <Container>
        <Button 
            label="Share link to channel"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
            onPress={this.press.bind(this)} />
    </Container>
</View>

          </ScrollView>
          
      );
    }
    }

