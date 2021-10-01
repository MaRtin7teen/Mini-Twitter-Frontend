import React from 'react'
import styled from "styled-components";
import { GiStarShuriken } from "react-icons/gi";
import Tweet from './Tweet';
import { BiUser } from 'react-icons/bi';

const Container = styled.div`

    & > .head, .tweetCont {
        border-bottom: 0.1px solid gray;
    }
    
    & > .head {
        padding: 1% 3%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > .headTitle {
            font-weight: 600;
            font-size: 1.2em;
        }

        & > .feedIcon {
            padding: 5px;
            border-radius: 50%;
            cursor: pointer;

            & > .icon {
                font-size: 1.3em;
                color: #0e88b8;
            }

            :hover {
                background-color: #202020;
            }
        }
    }

    & > .tweetCont {
        padding: 3%;
        display: grid;
        grid-template-columns: 50px auto;
        align-items: start;

        & > .avatar {
            display: flex;
            justify-content: center;
            
            & > .icon {
                font-size: 2em;
                border-radius: 50%;
                padding: 5%;
                background-color: gray;
            }
        }
    }
`;

const Posts = () => {
    return (
        <Container>
            
            <div className="head">
                
                <div className="headTitle">
                    Home
                </div>

                <div className="feedIcon">
                    <GiStarShuriken className="icon" />
                </div>

            </div>

            <div className="tweetCont">
                
                <div className="avatar">
                    <BiUser className="icon" />
                </div>

                <Tweet />
            </div>

            <div className="tweetList">

            </div>

        </Container>
    )
}   

export default Posts;