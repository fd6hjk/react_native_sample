import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { observer, inject } from "mobx-react";
import { connect } from "react-redux";
import { Container, Header, Content, Tab, Tabs, Body, Title, TabHeading, Left, Button, Icon, Subtitle, Right } from 'native-base';
import { Navigation } from "react-native-navigation";



class Second extends React.Component {

    static options(passProps) {
        return {
          topBar: {
            title: {
              text: 'My Screen'
            },
            drawBehind: false,
            visible: true,
            animate: false
          }
        };
    }


    render(){
        console.log(this.props);

        return (
            <Container>
                <Header hasTabs style={{ backgroundColor: "white"}}>
                    <Left>
                        <Button transparent onPress={() => Navigation.pop(this.props.componentId)}>
                            <Icon style={{ color : "black"}} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: "black"}}>탭페이지</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs style={{ backgroundColor : "white"}} style={Platform.OS === 'android' ? { overflow: 'hidden' } : null}>
                <Tab heading={<TabHeading style={{ backgroundColor : "white", elevation: 0}} ><Text>Tab1</Text></TabHeading>} noShadow>
                    <View><Text>1</Text></View>
                </Tab>
                <Tab heading="Tab2">
                    <View><Text>2</Text></View>
                </Tab>
                <Tab heading="Tab3">
                    <View><Text>3</Text></View>
                </Tab>
                </Tabs>
            </Container>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        msg : state.msg
    }
}

export default connect(mapStateToProps)(Second);