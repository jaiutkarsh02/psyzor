import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Image
  } from 'react-native';
   
  import Icon from 'react-native-vector-icons/FontAwesome';
  import Container from '../Components/Container';
  import Button from '../Components/Button';
  import Label from '../Components/Label';
import Footer from '../Components/Footer';

  
export default class Profile extends Component {
  render() {
    const styles = StyleSheet.create({
        scroll: {
          backgroundColor: 'black',
        //   padding: 30,
        //   paddingTop:94,
        marginBottom:0,


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
        fontSize: 15,
        color: '#FFF',
        alignSelf:'flex-start'
    },
    buttonWhiteText1: {
        fontSize: 15,
        color: '#FFF',
        // alignSelf:'flex-start'
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
        top:-45,
        height:20,
        alignSelf: 'flex-end',
        marginRight:0
    },
    primaryButton1: {
        backgroundColor: '#000',
        height:50,
        opacity:0.5,
        marginTop:-100,
        width:150,
        borderRadius:20,
        marginLeft:50,
        borderWidth:1,
        borderColor:'#ff6600'
    },
    primaryButton2: {
        backgroundColor: '#000',
        height:50,
        opacity:0.5,
        marginTop:-50,
        width:150,
        borderRadius:20,
        marginLeft:230,
        borderWidth:1,
        borderColor:'#ff6600',
        
    },

      primaryButton3: {
        backgroundColor: '#ff6600',
        height:50,
        opacity:0.5,
        marginTop:-40,
        width:95,
        borderRadius:20,
        marginLeft:0,
        borderWidth:1,
   
        
    },
    primaryButton4: {
        backgroundColor: '#ff6600',
        height:50,
        opacity:0.5,
        marginTop:-69,
        width:95,
        borderRadius:20,
        marginLeft:105,
        borderWidth:1,
        
        

    },
    primaryButton5: {
        backgroundColor: '#ff6600',
        height:50,
        opacity:0.5,
        marginTop:-90,
        width:95,
        borderRadius:40,
        marginLeft:205,
        borderWidth:1,
       
        
    },
    primaryButton6: {
        backgroundColor: '#ff6600',
        height:50,
        opacity:0.5,
        marginTop:-110,
        width:95,
        borderRadius:20,
        marginLeft:305,
        borderWidth:1,
        
        
    },
    primaryButton7: {
        backgroundColor: '#fff',
        height:50,
        opacity:0.5,
        marginTop:-110,
        width:95,
        borderRadius:20,
        marginLeft:305,
        borderWidth:1,
        
        
    },
    footer: {
        alignSelf: 'flex-end',
      borderColor:"#ff6600",
        borderWidth:1
        
    },
    footer1: {
        
        marginTop:600,
          borderColor:"#ff6600",
            borderWidth:1,
            height:52,
            borderColor:'#fff'
          
        }
    });
    return (
        <ScrollView style={styles.scroll}>
      <View>
        <Container>
        <Image
          style={{width: 450, height: 250, opacity:0.6}}
          source={{uri: 'data:image/jpeg;base64,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'}}
        />

</Container >
<Container> 

        <Button 
            label="GoLive"
            styles={{button: styles.primaryButton1, label: styles.buttonWhiteText}} 
             />
        
    <Button 
            label="Dashboard"
            styles={{button: styles.primaryButton2, label: styles.buttonWhiteText}} 
             />
    </Container>
      </View>
      <View>
      
          <Container>
          <Button 
            label="Videos"
            styles={{button: styles.primaryButton3, label: styles.buttonWhiteText1}} 
             />
            </Container>
            <Container>
          <Button 
            label="Clips"
            styles={{button: styles.primaryButton4, label: styles.buttonWhiteText1}} 
             />
               </Container>
            <Container>
        <Button 
            label="Info"
            styles={{button: styles.primaryButton5, label: styles.buttonWhiteText1}} 
             />
               </Container>
            <Container>
        <Button 
            label="Chat"
            styles={{button: styles.primaryButton6, label: styles.buttonWhiteText1}} 
             />
          </Container>
          </View>
      
      
      

          <Footer >
          <View >
    <Container>
          
    <Label text="Discover"/>
                  <Label style={styles.footer1} text="Browse"/>
          </Container>
</View>
      </Footer>
 
 
      
       </ScrollView>
    );
  }
}

