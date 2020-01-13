import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Text, TextInput, View } from "react-native";

const PositionWrapper = styled.View`
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.22);
`;

const Container = styled.View`
    height: 60%;
    width : 80%;
    padding: 12px;
    background-color: white;
    border-radius: 15;
    elevation: 1;
    display: flex;
    flexDirection: column;

`;

const TitleText = styled.Text`

    font-size: 30px;
    font-weight: bold;

`;

const ContentContainer = styled.View`
    display: flex;
    flex: 1;
    padding-top: 8px;
    padding-bottom: 8px;
`;

const ButtonContainer = styled.View`
    
    display:flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;

`;

const Button = styled.TouchableOpacity`
    margin: 15px;
    width: 60px;

`;

const AddTimeItem = ({ visible = false, onRequestClose }) => {

    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
            animationType="fade"
        >   
            <PositionWrapper onPress={() => console.log("ww")}>
                <Container>
                    <TitleText>항목추가</TitleText>
                    <ContentContainer>
                        <TextField label="제목" />
                    </ContentContainer>
                    <ButtonContainer>
                        
                    </ButtonContainer>
                </Container>
            </PositionWrapper>
        </Modal>
    );

}

const TextField = ({ label }) => {
    return (
        <View style={{ display: "flex"}}>
            <TextInput placeholder={label} style={{ backgroundColor: "#e3e3e3", padding: 8, borderRadius: 15}} />
        </View>
    )
}

export default AddTimeItem;