import React from 'react'
import styled, { StyleSheetConsumer } from "styled-components";
import { GiStarShuriken } from "react-icons/gi";
import { BiUser } from 'react-icons/bi';
import { BiDotsHorizontalRounded, BiMessageRounded, BiUpload } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import Tweet from './Tweet';
import axios from "axios";

const Container = styled.div`
    height: 100vh;

    & > .head {
        padding: 1% 3%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.1px solid gray;

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

    ::-webkit-scrollbar {
        display: none;  /* Safari and Chrome browsers */
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;  /* mozilla */
    }

    & > .postsList {

        & > .post {
            border-bottom: 0.1px solid gray;
            padding: 3%;
            display: grid;
            grid-template-columns: 50px auto;
            grid-gap: 1%;

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

            & > .postInfo {

                & > .userInfo {
                    display: flex;
                    justify-content: space-between;

                    & > div {
                        & > .name {
                            font-weight: 700;
                        }

                        & > .username {
                            color: gray;
                            padding: 0 3%;

                            :hover {
                                color: #0e88b8;
                            }
                        }
                    }

                    & > .icon {
                        padding: 1%;
                        font-size: 1.3em;
                        border-radius: 50%;
                        cursor: pointer;
                        
                        :hover {
                            color: #0e88b8;
                            background-color: #202020;
                        }
                    }
                }

                & > .tweet {
                    font-size: 1.1em;
                }

                & > .tweetOptions {
                    padding-top: 1%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    & > :nth-child(1):hover {
                        color: #10b2f1;
                    }

                    & > :nth-child(2):hover {
                        color: #eb4141;
                    }

                    & > :nth-child(3):hover {
                        color: #05e405;
                    }

                    & > :nth-child(4):hover {
                        color: #f0c13f;
                    }
                    
                    & > .icon {
                        padding: 1%;
                        font-size: 1.3em;
                        border-radius: 50%;
                        cursor: pointer;

                        :hover {
                            background-color: #383838;
                        }
                    }
                }
            }
        }
    }
`;

const Posts = () => {
    const [posts, setPosts] = React.useState([]);
    const [user, setUser] = React.useState();

    const [loading, setLoading] = React.useState(false);

    const getPosts = () => {
        setLoading(true);

        axios.get(`http://localhost:5000/posts`)
            .then ((result) => {
                console.log(result);
                setPosts(result.data);
                setUser(result.data);
            })
            .catch ((error) => {
                console.log(error.message);
            })
            .finally (() => {
                setLoading(false);
            }) 
    }

    const getUser = () => {
        setLoading(true);

        axios.get(`http://localhost:5000/users`)
            .then ((result) => {
                console.log(result.data[0]);
                setUser(result.data[0]);
            })
            .catch ((error) => {
                console.log(error.message);
            })
            .finally (() => {
                setLoading(false);
            })
    }

    React.useEffect(() => {
        getPosts();
        getUser();
    }, []);

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

            <Tweet />

            <div className="postsList">
                
                    {
                        loading ? 
                        
                        <div>loading</div> :

                        posts.map(postItem => (

                            <div className="post" key={postItem}>

                                <div className="avatar">
                                    <BiUser className="icon" />
                                </div>

                                <div className="postInfo">

                                    <div className="userInfo">

                                        <div>

                                            <span className="name">
                                                {postItem.name}    
                                            </span>

                                            <span className="username">
                                                @{postItem.username}
                                            </span>

                                        </div>

                                        <BiDotsHorizontalRounded className="icon" />

                                    </div>

                                    <div className="tweet">
                                        {postItem.tweet}
                                    </div>

                                    <div className="tweetOptions">

                                        <BiMessageRounded className="icon" />

                                        <AiOutlineHeart className="icon" />

                                        <AiOutlineRetweet className="icon" />

                                        <BiUpload className="icon" />
                                    </div>

                                </div>
                            </div>
                        ))
                    }

            </div>

        </Container>
    )
}   

export default Posts;