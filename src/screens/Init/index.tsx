import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RNSingleSelect, {
    ISingleSelectDataType,
  } from "@freakycoder/react-native-single-select";
//------- Style's Imports and Pic's
import { ScrowView } from '../Home/styles'
import { BackgroundImage, PageView, Otherstyles } from './styles';
import initBackground from '../../assets/initBackground.jpg';
import Nubank from '../../assets/nubank.png';
//--------------------------


const Init = ({ navigation }) =>{
    const staticData: Array<ISingleSelectDataType> = [
        { id: 0, value: "Brasil" },
        { id: 1, value: "México" },
        { id: 2, value: "Estados Unidos" },
        { id: 3, value: "Japão" },
    ];
    const onPress = () => {console.log("OI")}
    return(
        <BackgroundImage source={initBackground}>
            <View style={Otherstyles.container}>
                <View style={Otherstyles.HeaderView}>
                    <Image style={Otherstyles.LogoNubank} source={Nubank}/>
                    <RNSingleSelect
                        placeholderTextColor={'white'}
                        arrowImageStyle={{tintColor:'white'}}
                        buttonContainerStyle={Otherstyles.PickerSelect}
                        data={staticData} searchEnabled={false}
                        initialValue={staticData[0]}
                        width={120} menuBarContainerWidth={120} menuBarContainerHeight={230}
                    />
                </View>
                <View style={Otherstyles.MainView}>
                    <Text style={Otherstyles.MainText}>Um mundo{"\n"}financeiro sem {"\n"}complexidades</Text>
                    <TouchableOpacity style={Otherstyles.ButtonStart} onPress={() => navigation.navigate('Home')}>
                        <Text style={Otherstyles.ButtonText}>COMEÇAR</Text>
                    </TouchableOpacity>
                    <Text style={Otherstyles.forgetButtonText}>Entrar na minha conta {`>`} </Text>
                </View>
            </View>
        </BackgroundImage>  
    )
}

export default Init;