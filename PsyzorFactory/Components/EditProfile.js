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
        bio:null};
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
              color: '#fff',
              fontSize: 20
          },
          alignRight: {
              alignSelf: 'flex-start'
          },
          textInput: {
            height: 50,
            fontSize: 20,
            backgroundColor: '#000',
            opacity:0.5
        },
        transparentButton: {
            marginTop: 30,
            borderColor: '#3B5699',
            borderWidth: 2
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
      
        buttonOrangeText: {
            fontSize: 34,
            fontFamily:'Lucida Calligraphy',
            color: '#FF6600'
        },
        primaryButton: {
            backgroundColor:'#FF6600',
            right:0,
            top:-50,
            alignSelf: 'flex-end',
            marginRight:0,
            
            
        },
        buttonText:
        {

            marginLeft:10,
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
            top:10
          
        },
        footer: {
           marginTop: 35,
           borderColor:'#ff6600',
           borderWidth:1,
           marginTop:0
        }
        });
      return (
       
   
          <ScrollView style={styles.scroll}>
          <Header>
              <Container flexDirection="row">
                 <View>
            <Text style={[styles.buttonText]}>EditProfile</Text> 
            </View>
                  <Button 
            label="Save"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
            onPress={this.press.bind(this)} />
              </Container>
          </Header>
<Container>
    <Label text="Edit Bio"/>
    <View style={styles.footer}>
    <TextInput
        style={styles.textInput}
        placeholder="Bio" 
        placeholderTextColor="#fff"
       onChangeText={(value) => this.setState({bio: value})}
       value={this.state.bio}
    />
    </View>
</Container>


          </ScrollView>
          
      );
    }
  }

