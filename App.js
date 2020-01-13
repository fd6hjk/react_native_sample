/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useCallback } from 'react';
import { Text } from "react-native";
import { Button } from "native-base";
import { Navigation } from 'react-native-navigation';

import styled from "styled-components/native";
import { connect } from 'react-redux';
import { addTime } from './redux/actions/actions';
import TimeList from "./pages/time_list/time_list";
import TimeListHeader from "./pages/time_list/time_list_header";
import TimeItem from './model/time_item';

const Container = styled.SafeAreaView`
  display: flex;
  height: 100%;
`;

const App: () => React$Node = ({ dispatch, componentId }) => {

  const addItem = useCallback(() => {
    dispatch(addTime(new TimeItem("아이템" , new Date(), 5000, "")))
  }, [dispatch]);


  return (
    <>
      <Container>
        <TimeListHeader date={new Date()}/>
        <TimeList />
         <Button style={{ justifyContent: "center", alignItems: "center", margin: 8}} onPress={addItem} light><Text style={{ fontWeight: "bold", fontSize: 18}}>디스패치</Text></Button>
          <Button style={{ justifyContent: "center", alignItems: "center", margin: 8}} title="이동" light onPress={() => Navigation.push(componentId, {
            component: {
              name: "navigation.second",
              options: {
                topBar : {
                  visible: false
                },
              },
            },
            
          })}><Text style={{ fontWeight: "bold", fontSize: 18}}>이동</Text></Button>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
