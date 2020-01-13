
import React, { useCallback } from "react";
import styled from "styled-components/native";

const DAY_SECONDS = 86400;

const Container = styled.View`
    padding: 12px;
    border-bottom-width: 1px;
    border-color: #e3e3e3;

`;

const HeaderTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
`

const TimeListViewHeader = ({ date }) => {

    const getHeaderTitle = useCallback(() => {

        const now = new Date();

        const diff = now.getTime() - date.getTime();

        if(DAY_SECONDS >= diff) return "오늘";

        return `${date.getMonth() + 1}월 ${date.getDate()}일`;
    }, [date]);

    return (
        <Container>
            <HeaderTitle>
                {getHeaderTitle()}
            </HeaderTitle>
        </Container>
    )
}

export default TimeListViewHeader;