import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export const ScrowView = styled.ScrollView`
    width: 100%;
    heigth: 100%;
`


export const Container = styled.View`
    width: 100%;
    height: ${height}px;
    padding: 16px;
    flex:1;
    justify-content: space-between;
    align-items: center;
    background-color: #4e455410
`

export const Header = styled.View`
    width: 100%;

`

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #4e455e;
`

export const Subtitle = styled.Text`
    font-weight: 300;
    color: #4e455e;
`

export const Content = styled.View`
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    background-color: #ffffff;
    align-items: center;
`

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 55px;
    align-items: center;
    justify-content: center;
    background-color: #6A1B9A;
    border-radius: 55px;
    margin-bottom: 20px;
`

export const TextButton  = styled.Text`
    color: #ffffff;
`

export const View = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    marginBottom: 100px;
    marginTop: 10px;
`