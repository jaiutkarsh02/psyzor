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
              color: '#ff6600',
              fontSize: 20,
              opacity:0.1
          },
          alignRight: {
              alignSelf: 'flex-start'
          },
          textInput: {
            height: 50,
            fontSize: 30,
            backgroundColor: '#000',
            opacity:0.1
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
            backgroundColor: '#ff6600',
            marginTop:30,
            borderRadius:40
        },
        footer: {
            //marginTop: 35,
            borderColor:'#ff6600',
            borderBottomWidth:1,
            marginTop:0
        },
        buttonText:
        {

            marginLeft:10,
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
            top:10
          
        }
        });
      return (
       
   
          <ScrollView style={styles.scroll}>
          <Header>
          <View>
            <Text style={[styles.buttonText]}>ManageStream</Text> 
            </View>
          </Header>
          <Label text="Broadcast Info" />
<Container>
    <Label text="Title" />
    <View style={styles.footer}>
    <TextInput
        style={styles.textInput}
        onChangeText={(value) => this.setState({title: value})}
        value={this.state.title}
    />
    </View>

</Container>
<Container>
    <Label text="Go Live Notification" />
    <View style={styles.footer}>

    <TextInput
        style={styles.textInput}
        onChangeText={(value) => this.setState({go_live_notification: value})}
        value={this.state.go_live_notification}
    />
    </View>

</Container>
<Container>
<Label text="Category" />
<View style={styles.footer}>

    <TextInput
        style={styles.textInput}
        onChangeText={(value) => this.setState({category: value})}
        value={this.state.category}
    />
    </View>
</Container>


    <Container>
        <Button 
            label="Save"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
            onPress={this.press.bind(this)} />
    </Container>


    <Container>
        <Button 
            label="Share link to channel"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
            onPress={this.press.bind(this)} />
    </Container>


          </ScrollView>
          
      );
    }
    }

