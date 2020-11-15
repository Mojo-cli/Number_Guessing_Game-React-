import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import Colors from '../Constants/Colors';


const NumberContainer = props => {
  return(
    <View style={styles.cN}>
    <Text style={{marginTop:8, color:'white'}}>
    {props.children}
    </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  cN:{
    backgroundColor:'#f56a79',
    height:40,
    width:250,
    alignItems:'center',
    borderRadius:15,
    elevation:8,
    marginTop:100
  }
})

export default NumberContainer;
