import React from "react";

//----- IMPORTS
import { Container, Title, Subtitle, Content, Button, TextButton, Header, View} from './styles'
import {Card, Input} from '../../components'
//--------------




const Home = () => {
    return(
        <Container>
            <Header>
                <Title>Meu cartão</Title>
                <Subtitle>Insira os dados do cartão</Subtitle>
            </Header>
            <Content>
                <Card />

                <Input />
                <Input />
                <View>
                    <Input width={'45%'} />
                    <Input width={'45%'} />
                </View>

            </Content>

            <Button>
                <TextButton>Cadastrar</TextButton>
            </Button>
        </Container>
    )
}

export default Home; 