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
        //backgroundColor: "red",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    MainView:{
        marginTop:'90%',
        flex: 5,
        //backgroundColor: 'green'
    },
    LogoNubank:{
        tintColor: '#fff',
        marginTop: 45,
        width: 60,
        height: 30,
    },
    PickerSelect:{
        paddingRight:18,
        marginTop:33,
        borderRadius:30,
        borderTopEndRadius:30,
        borderBottomEndRadius:30,
        borderTopLeftRadius:30,
        backgroundColor: 'black',
        opacity: 0.8
    },
    MainText:{
        color:'#fff',
        fontWeight:'400',
        fontSize: 40,
        marginBottom: 30
    },
    ButtonStart:{
        backgroundColor: '#fff',
        height:50,
        borderRadius:7,
        alignItems:'center',
        justifyContent:'center'
    },
    ButtonText:{
        color: '#6A1B9A',
        fontWeight: 'bold',
        fontSize: 15
    },
    forgetButtonText:{
        color: '#FFF',
        paddingTop: 25,
        fontWeight: '500',
        alignSelf: 'center'
    }
  });