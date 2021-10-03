import React from 'react';
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Container = styled.div`

    & > .topTrends {
        background-color: #292929;
        border-radius: 20px;
        margin: 5%;

        & > .head, .trends {
            display: flex;
            justify-content: space-between;
        }

        & > .head {
            padding: 3% 7%;
            align-items: center;

            & > .title {
                font-weight: 600;
                font-size: 1.3em;
            }

            & > .icon {
                color: #00b7ff;
                padding: 2%;
                border-radius: 50%;
                cursor: pointer;

                :hover {
                    background-color: #3b3b3b;
                }
            }
        }

        & > .trends {
            display: flex;
            flex-direction: column;
            
            & > .trendItem {
                padding: 3% 7%;
                display: flex;
                justify-content: space-between;
                border-top: 0.1px solid gray;
                border-bottom: 0.1px solid gray;

                & > .trendInfo {
                    
                    & > .category, .totalTweets {
                        font-size: 0.8em;
                    }
                    
                    & > .category {
                        color: gray;
                    }

                    & > .topic {
                        font-size: 1em;
                    }

                    & > .totalTweets {
                        color: #747474;
                    } 
                }

                & > .icon {
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 1.3em;
                    padding: 1%;

                    :hover {
                        background-color: #494949;
                        color: #00b7ff;
                    }
                }

                :hover {
                    background-color: #333333;

                    & > .trendInfo > .topic {
                        color: #00b7ff;
                    }
                }
            }
        }

        & > .moreTrends {
            padding: 3% 7%;
            font-weight: 600;
            font-size: 1em;
            cursor: pointer;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;

            :hover {
                background-color: #444444;
                color: #00b7ff;
            }
        }
    }
`;

const TopTrends = () => {
    return (
        <Container>
            
            <div className="topTrends">

                <div className="head">
                    <div className="title">Trends for you</div>
                    <FiSettings className="icon" />
                </div>

                <div className="trends">

                    <div className="trendItem">

                        <div className="trendInfo">

                            <div className="category">
                                Programming · Trending
                            </div>

                            <div className="topic">
                                #React
                            </div>

                            <div className="totalTweets">
                                30.1K Tweets
                            </div>

                        </div>

                        <BiDotsHorizontalRounded className="icon" />

                    </div>

                    <div className="trendItem">

                        <div className="trendInfo">

                            <div className="category">
                                Programming · Trending
                            </div>

                            <div className="topic">
                                #Python
                            </div>

                            <div className="totalTweets">
                                23.7K Tweets
                            </div>

                        </div>

                        <BiDotsHorizontalRounded className="icon" />

                    </div>

                    <div className="trendItem">

                        <div className="trendInfo">

                            <div className="category">
                                Programming · Trending
                            </div>

                            <div className="topic">
                                #Flutter
                            </div>

                            <div className="totalTweets">
                                19.1K Tweets
                            </div>

                        </div>

                        <BiDotsHorizontalRounded className="icon" />

                    </div>

                </div>

                <div className="moreTrends">
                    Show more
                </div>
            </div>

        </Container>
    )
}

export default TopTrends;