import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const BackgroundImage = styled.ImageBackground`
    width: 100%;
    flex: 1; 
`;

export const HeaderView = styled.View`
    backgroundColor: "red"
`
export const PageView = styled.View`
    flex: 1,
    backgroundColor: "red"
`

export const Otherstyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexDirection: 'column'
    },
    HeaderView:{
        flex: 1,
        backgroundColor: "red",
    },
    LogoNubank:{
        tintColor: '#fff',
        marginTop: 30,
        width: 60,
        height: 30,
    }
  });