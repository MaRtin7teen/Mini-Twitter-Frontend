import React from 'react';
import styled from "styled-components";
import Menu from '../../Components/Dashboard/Menu';
import Posts from '../../Components/Dashboard/Posts';
import Trends from '../../Components/Dashboard/Trends';

const Container = styled.div`
    display: grid;
    grid-template-columns: 20% 50% 30%;
`;

const Dashboard = () => {
    return (
        <Container>
            
            <Menu />
            <Posts />
            <Trends />

        </Container>
    )
}

export default Dashboard
