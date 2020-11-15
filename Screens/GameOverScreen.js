import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import NumberContainer from "../Components/NumberContainer";
const GameOverScreen = props => {
    return(
        <View style = {styles.screen}>

            <Text style={{fontFamily:"open-sans-bold", fontSize:30, marginTop:25}}> Game Is Over! </Text>

            <Image source={require('../assets/Success-1.png')} style={{height:200,width:300}}/>

            <View style={styles.info}>

            <Text style={styles.font}>Number Of Rounds: { props.roundsNumber } &</Text>

            <Text style={styles.font}> Number was: { props.userNumber } </Text>
            
            </View>

            <View style={{marginTop:30, elevation:10}}>

            <Button 
                title="Start New Game" onPress={ props.onRestart } 
            /> 

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    info:{
        borderWidth:1,
        height:50,
        width:250,
        alignItems:'center',
        padding:8,
        borderRadius:10,
        borderColor:"#f3bad6",
        backgroundColor:"#f3bad6",
        elevation:10
    }
}) 

export default GameOverScreen;