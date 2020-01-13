import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { View, Text, FlatList, TouchableNativeFeedback } from "react-native";
import styled from "styled-components/native";
import AddTimeItem from "../add_time/add_time";


const EmptyTimeListPlaceHolder = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 20;
    font-weight: bold;
`;

const TimeList = ({ times }) => {

    const [ modal, setModal ] = useState(false);

    const onPress = useCallback((item) => {
        console.log(item);
        setModal(true);

    }, []);

    return (
        <>
            { times.length === 0 ?
                <EmptyTimeListPlaceHolder>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>기록이 없습니다</Text>
                </EmptyTimeListPlaceHolder>  :
                <FlatList data={times} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <TimeListTile item={item} onPress={() => onPress(item) } />} />
            }
            <AddTimeItem visible={modal} onRequestClose={() => setModal(false)} />
        </>
    )

}


const ListTileContainer = styled.View`
    flexDirection: row;
    border-radius: 12;
    background-color: #e3e3e3;
    margin-left: 8;
    margin-right: 8;
    margin-top: 10;
    overflow: hidden;
`;

const TimeListTile = ({ item, onPress }) => {

    return (
        <ListTileContainer>
            <TouchableNativeFeedback useForeground={true} onPress={onPress}>
                <View style={{ display:"flex", width: "100%", padding: 15}}>
                    <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                        <Text style={{ fontSize: 18, flex: 1, fontWeight: "bold" }}>{ item.title }</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold"}}>{ item.duration / 1000 }초</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent:"space-between"}}>
                        <Text>dsadsad</Text>
                        <Text>{ item.formattedCreatedAt }</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </ListTileContainer>
    )
}

const mapStateToProps = (state) => {

    return {
        times : state.timeReducer
    }

}

export default connect(mapStateToProps)(TimeList);