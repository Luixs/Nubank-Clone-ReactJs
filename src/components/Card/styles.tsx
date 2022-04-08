import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 30px;
`

export const Content = styled.View`
    width: 100%;
    height: 160px;
    background-color: #6A1B9A;
    border-radius: 20px;
`

export const Strip = styled.View`
    width: 100%;
    height: 30px;
    margin-top: 25px;
    background-color: #BDBDBD;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center
`
export const TextCVV = styled.Text`
    margin-right: 40px;
`
export const TextBackNumberCard = styled.Text`
    color: 'red';
`
export const View = styled.View`
    width: 80%;
    margin-top: 50px;
`

export const Text = styled.Text<propsText>`
    width: auto;
    max-height: 35px;
    color: #FAFAFA;
    margin-top: 8px;
    font-size: ${({fontSize}) => fontSize ? fontSize : '14px'};
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
`

export const ViewInformation= styled.View`
    width: 100%
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 14px
`


interface propsText{
    fontSize: string
    bold?: boolean
}