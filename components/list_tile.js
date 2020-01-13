import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";

const _ListTile = styled.View`
    
    display: flex;
    flexDirection: row;
    width: 100%;
    padding: 12px;

`;

const TouchableOpacity = styled.TouchableOpacity`
    display: flex;
    flexDirection: row;
    width: 100%;
`;

const Title = styled.View`
    flex: 1;
`;

const _ListTileText = styled.Text`
    font-size : 22;
    
`;

const ListTile = ({ data }) => {
    console.log(data);
    return (
        <_ListTile onPress={() => console.log("w")}>
            <TouchableOpacity>
                <Title>
                    <_ListTileText>{"dsadsa"}</_ListTileText>
                </Title>
                <View><_ListTileText>{`10초`}</_ListTileText></View>
            </TouchableOpacity>
        </_ListTile>
    );
};

export default ListTile;