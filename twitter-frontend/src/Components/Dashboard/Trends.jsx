import React from 'react';
import styled from "styled-components";
import FollowRec from './FollowRec';
import TopTrends from './TopTrends';

const Container = styled.div`
    border-left: 0.1px solid gray;
    height: 100vh;
    overflow-y: scroll;

    & > .searchBox {
        position: sticky;
        top: 0;
        text-align: center;
        background-color: black;

        & > input {
            margin: 3%;
            width: 80%;
            background-color: #242424;
            border-radius: 30px;
            outline: none;
            border: 2px solid transparent;
            padding: 3% 5%;
            font-size: 1em;
            color: white;

            :focus {
                border: 2px solid #00b7ff;
            }
        }
    }

    ::-webkit-scrollbar {
        display: none;  /* Safari and Chrome browsers */
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;  /* mozilla */
    }
`;

const Trends = () => {
    return (
        <Container>
            
            {/* Search box */}
            <div className="searchBox">
                <input type="text" placeholder="Search twitter" />
            </div>

            {/* Top trends container */}
            <TopTrends />

            {/* Follow recommendations container */}
            <FollowRec />

        </Container>
    )
}

export default Trends; 