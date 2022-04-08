import React, { useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
//----------- IMPORTS
import { Container, Title, Subtitle, Content, Button, TextButton, Header, View, ScrowView } from './styles'
import {Card, Input} from '../../components'
import { getBrand } from "../../components/Input/brand";
//--- ICONS
import IconUser from '../../assets/icon-user.svg';
import IconCode from '../../assets/icon-code.svg';
import IconDate from '../../assets/icon-date.svg';
import IconNumber from '../../assets/icon-number.svg';
//------------------



const Home = () => {
    const [widthAnimated, setWidthAnimated] = useState(new Animated.Value(310));
    const [backView, setBackView] = useState(false);
    const [icon, setIcon] = useState({
        icon:false
    })
    const [data, setData] = useState({
        name: '',
        number: '',
        validate: '',
        cvv: ''
    })

    const animetedCard = (back: boolean) => {
        if(back && ! backView){
            Animated.timing(widthAnimated, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false
            }).start();

            setTimeout(() =>{
                Animated.timing(widthAnimated, {
                    toValue: 310,
                    duration: 400,
                    useNativeDriver: false
                }).start();
                setBackView(true)
            }, 400)
        }

        if(!back && backView){
            Animated.timing(widthAnimated, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false
            }).start();

            setTimeout(() =>{
                Animated.timing(widthAnimated, {
                    toValue: 310,
                    duration: 400,
                    useNativeDriver: false
                }).start();
                setBackView(false)
            }, 400)
        }

    }
    return(
        <ScrowView>
            <Container>
                <Header>
                    <Title>Meu cartão</Title>
                    <Subtitle>Insira os dados do cartão</Subtitle>
                </Header>
                <Content>
                    <Animated.View style={{width: widthAnimated}}>
                        <Card data={data} icon={icon?.icon} back={backView}/>
                    </Animated.View>
                    <Input 
                        icon={<IconUser fill={'#6A1B9A'} width={16} height={16}/>}
                        value={data.name}
                        onChangeText={(text)=> {
                            setData({...data, name: text})
                            animetedCard(false)
                        }}
                        placeholder='Nome do Titular'
                        />
                    <Input 
                        placeholder='N° do Cartão'
                        icon={<IconNumber fill={'#6A1B9A'} width={16} height={16}/>}
                        type='credit-card'
                        mask
                        value={data.number}
                        onChangeText={(text)=> {
                            setData({...data, number: text})
                            setIcon(getBrand(text))
                            animetedCard(false)
                        }}
                        />
                    <View>
                        <Input
                            width={'45%'}
                            placeholder='Validade'
                            type='custom'
                            options={{
                                mask: '99/99'
                            }}
                            mask
                            icon={<IconDate fill={'#6A1B9A'} width={16} height={16}/>}
                            value={data.validate}
                            onChangeText={(text)=> {
                                setData({...data, validate: text})
                                animetedCard(false)
                            }}
                        />
                        <Input
                            width={'45%'}
                            placeholder='CVV'
                            mask
                            type='custom'
                            options={{
                                mask: '9999'
                            }}
                            icon={<IconCode fill={'#6A1B9A'} width={16} height={16}/>}
                            value={data.cvv}
                            onChangeText={(text)=> {
                                setData({...data, cvv: text})
                                animetedCard(true)
                            }}
                        />
                    </View>

                </Content>

                <Button>
                    <TextButton>Cadastrar</TextButton>
                </Button>
            </Container>
        </ScrowView>
    )
}

export default Home; 