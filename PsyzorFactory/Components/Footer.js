import React, { Component } from 'react';
 
import {
  StyleSheet,
  View
} from 'react-native';
 
const Footer = (props) => {
    return (
        <View style={styles.labelContainer}>
            { props.children }
        </View>
    );
}
 
const styles = StyleSheet.create({
    labelContainer: {
        backgroundColor:'#ff6600',
        height:50,
        marginTop:540,
                marginBottom:0,
        bottom:0,
        paddingBottom:0,
    }
});
 
export default Footer;