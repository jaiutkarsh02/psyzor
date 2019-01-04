import React, { Component } from 'react';
 
import {
  StyleSheet,
  View
} from 'react-native';
 
const Header = (props) => {
    return (
        <View style={styles.labelContainer}>
            { props.children }
        </View>
    );
}
 
const styles = StyleSheet.create({
    labelContainer: {
        backgroundColor:'#ff6600',
        marginTop:0,
        height:50,
        marginBottom:20,
        top:0,
        padding:0,
    }
});
 
export default Header;