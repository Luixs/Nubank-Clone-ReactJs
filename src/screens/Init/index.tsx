import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
//------- Style's Imports and Pic's
import { ScrowView } from '../Home/styles'
import { BackgroundImage, MainView, PageView, LogoNubank, Otherstyles } from './styles';
import initBackground from '../../assets/initBackground.jpg';
import Nubank from '../../assets/nubank.png';
//--------------------------

const Init = () =>{
    
    return(
        <BackgroundImage source={initBackground}>
            <View style={Otherstyles.container}>
                <View style={Otherstyles.HeaderView}>
                    <Image style={Otherstyles.LogoNubank} source={Nubank}/>
                </View>
                <View style={{ flex: 5, backgroundColor: "green" }} />
            </View>
        </BackgroundImage>  
    )
}

export default Init;